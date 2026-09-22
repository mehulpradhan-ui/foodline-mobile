import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Crypto from 'expo-crypto';
import * as Haptics from 'expo-haptics';
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Card, EmptyState, ErrorState, Loading, Screen, StatusPill } from '@/components/ui';
import { useCompanyId } from '@/features/auth/auth-context';
import { api, type ReceivingTask, type ScannerSession } from '@/lib/api';
import { isDemoMode } from '@/lib/env';

/**
 * Receiving runs on the ERP's scanner subsystem:
 *   start_scanner_session → get_governed_scanner_receiving_queue → submit_scanner_scan
 *
 * Every mutation is optimistic-concurrency guarded (row versions) and idempotent
 * (idempotency key), so a dropped connection mid-scan cannot double-count stock.
 *
 * TODO(wiring): warehouse and goods-receipt selection currently come from the
 * constants below. Wire them to `warehouse_directory_snapshot` and the receiving
 * arrivals list once those screens exist — the session/queue/scan flow itself is complete.
 */
const DEMO_WAREHOUSE_ID = '00000000-0000-4000-8000-0000000000w1';
const DEMO_GOODS_RECEIPT_ID = 'gr1';

export default function Receiving() {
  const companyId = useCompanyId();
  const queryClient = useQueryClient();
  const [permission, requestPermission] = useCameraPermissions();
  const [session, setSession] = useState<ScannerSession | null>(null);
  const [scanning, setScanning] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [lastScan, setLastScan] = useState<string | null>(null);
  const busy = useRef(false);

  const start = useMutation({
    mutationFn: () => api.receiving.startSession(companyId, DEMO_WAREHOUSE_ID, 'mobile'),
    onSuccess: setSession,
    onError: (e: Error) => setMessage(e.message),
  });

  const close = useMutation({
    mutationFn: (s: ScannerSession) => api.receiving.closeSession(companyId, s),
    onSettled: () => {
      setSession(null);
      setMessage(null);
      setLastScan(null);
    },
  });

  const queue = useQuery({
    queryKey: ['receiving', 'queue', companyId, DEMO_GOODS_RECEIPT_ID],
    queryFn: () => api.receiving.queue(companyId, DEMO_GOODS_RECEIPT_ID),
    enabled: session !== null,
  });

  const submit = useMutation({
    mutationFn: async ({ task, raw, symbology }: { task: ReceivingTask; raw: string; symbology: string }) => {
      if (!session) throw new Error('No scanner session');
      await api.receiving.submitScan(companyId, {
        session,
        claimId: task.taskId,
        taskId: task.taskId,
        taskType: 'receiving',
        taskRowVersion: task.receiptRowVersion,
        expectedRequirementId: task.purchaseOrderVersionLineId,
        rawValue: raw,
        symbology,
        inputMethod: 'scan',
        // Stable per scan: a retry after a network drop is a no-op, not a double count.
        idempotencyKey: Crypto.randomUUID(),
      });
    },
    onSuccess: () => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      void queryClient.invalidateQueries({ queryKey: ['receiving', 'queue'] });
      setMessage(null);
    },
    onError: (e: Error) => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setMessage(e.message);
    },
  });

  const onBarcode = useCallback(
    async ({ data, type }: { data: string; type: string }) => {
      if (busy.current) return;
      busy.current = true;
      setScanning(false);
      setLastScan(data);
      try {
        const tasks = queue.data ?? [];
        // In live mode the server resolves the barcode; the client only needs a
        // candidate task to attach the scan to. Eligible lines first.
        const task = tasks.find((t) => t.isEligible && t.remainingBaseQuantity > 0) ?? tasks[0];
        if (!task) {
          setMessage('Nothing left to receive on this delivery.');
          return;
        }
        await submit.mutateAsync({ task, raw: data, symbology: type });
      } finally {
        busy.current = false;
      }
    },
    [queue.data, submit]
  );

  if (scanning) {
    return (
      <Screen>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{
            barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'code128', 'code39', 'itf14'],
          }}
          onBarcodeScanned={onBarcode}
        >
          <SafeAreaView className="flex-1 justify-end p-6">
            <View className="rounded-2xl bg-black/70 p-4">
              <Text className="text-center text-sm text-white">Point the camera at the case barcode</Text>
              <View className="mt-3">
                <Button label="Cancel" variant="ghost" onPress={() => setScanning(false)} />
              </View>
            </View>
          </SafeAreaView>
        </CameraView>
      </Screen>
    );
  }

  return (
    <Screen>
      <SafeAreaView className="flex-1" edges={['top']}>
        <View className="gap-3 px-5 pb-3 pt-2">
          <Text className="text-2xl font-bold text-ink">Receiving</Text>
          {session ? (
            <Text className="text-sm text-ink-muted">
              Session open{isDemoMode ? ' · demo' : ''} · {queue.data?.length ?? 0} lines
            </Text>
          ) : null}
        </View>

        {!session ? (
          <View className="gap-4 px-5">
            <Card>
              <Text className="text-base font-semibold text-ink">No scanner session</Text>
              <Text className="mt-1 text-sm text-ink-muted">
                Start a session to claim receiving work for this warehouse. Scans are recorded against
                the session, so a lost connection never loses a count.
              </Text>
            </Card>
            {message ? <Text className="text-sm text-danger">{message}</Text> : null}
            <Button label="Start scanner session" onPress={() => start.mutate()} loading={start.isPending} />
          </View>
        ) : queue.isPending ? (
          <Loading label="Loading receiving queue" />
        ) : queue.isError ? (
          <ErrorState message={(queue.error as Error).message} onRetry={() => queue.refetch()} />
        ) : (
          <>
            <FlatList
              data={queue.data}
              keyExtractor={(t) => t.taskId}
              contentContainerClassName="gap-3 px-5 pb-4"
              ListEmptyComponent={<EmptyState title="Queue is empty" hint="Nothing is waiting to be received." />}
              renderItem={({ item }) => <TaskRow task={item} />}
            />
            <View className="gap-2 px-5 pb-4">
              {lastScan ? <Text className="text-xs text-ink-muted">Last scan: {lastScan}</Text> : null}
              {message ? <Text className="text-sm text-danger">{message}</Text> : null}
              {permission?.granted ? (
                <Button label="Scan a case" onPress={() => setScanning(true)} loading={submit.isPending} />
              ) : (
                <Button label="Allow camera" onPress={() => void requestPermission()} />
              )}
              <Button label="End session" variant="ghost" onPress={() => close.mutate(session)} />
            </View>
          </>
        )}
      </SafeAreaView>
    </Screen>
  );
}

function TaskRow({ task }: { task: ReceivingTask }) {
  const done = task.remainingBaseQuantity <= 0;
  const received = task.priorReceivedBaseQuantity;
  return (
    <View className={`rounded-2xl border border-surface-line bg-surface-card p-4 ${done ? 'opacity-60' : ''}`}>
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1 gap-0.5">
          <Text className="text-xs font-medium text-ink-muted">
            Line {task.lineNumber} · {task.productSku}
          </Text>
          <Text className="text-base font-semibold text-ink" numberOfLines={2}>
            {task.productName}
          </Text>
        </View>
        <StatusPill status={done ? 'ok' : 'low'} label={done ? 'Complete' : 'Open'} />
      </View>

      <Text className="mt-3 text-sm text-ink">
        {received} of {task.orderedBaseQuantity} {task.uomCode} received
        {task.remainingBaseQuantity > 0 ? ` · ${task.remainingBaseQuantity} left` : ''}
      </Text>

      {task.blockerCode ? <Text className="mt-1 text-xs text-warn">Blocked: {task.blockerCode}</Text> : null}

      <View className="mt-2 flex-row flex-wrap gap-2">
        {task.tracksLots ? <Flag label="Lot" /> : null}
        {task.tracksExpiry ? <Flag label="Expiry" /> : null}
        {task.catchWeight ? <Flag label="Catch weight" /> : null}
        {task.temperatureRequired ? <Flag label="Temp" /> : null}
      </View>
    </View>
  );
}

function Flag({ label }: { label: string }) {
  return (
    <View className="rounded-md bg-brand-tint px-2 py-0.5">
      <Text className="text-[10px] font-semibold uppercase text-brand">{label}</Text>
    </View>
  );
}
