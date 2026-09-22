import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import React, { useCallback, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Card, Screen, StatusPill } from '@/components/ui';
import { api, type Item } from '@/lib/api';

/**
 * Receiving: scan a barcode, confirm the item, record the receipt.
 * Deliberately two taps — the demo audience is a warehouse hand on a phone.
 */
export default function Receiving() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);
  const [item, setItem] = useState<Item | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const busy = useRef(false);

  const onBarcode = useCallback(async ({ data }: { data: string }) => {
    if (busy.current) return;
    busy.current = true;
    setScanning(false);
    try {
      const found = await api.items.byBarcode(data);
      if (found) {
        void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setItem(found);
        setMessage(null);
      } else {
        void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        setItem(null);
        setMessage(`No item matched barcode ${data}.`);
      }
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Lookup failed');
    } finally {
      busy.current = false;
    }
  }, []);

  if (scanning) {
    return (
      <Screen>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'code128', 'code39'] }}
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
        <View className="gap-4 px-5 pt-2">
          <Text className="text-2xl font-bold text-ink">Receiving</Text>

          {item ? (
            <Card>
              <Text className="text-xs font-medium text-ink-muted">{item.sku}</Text>
              <Text className="mt-0.5 text-lg font-semibold text-ink">{item.name}</Text>
              <View className="mt-2">
                <StatusPill status={item.status} />
              </View>
              <Text className="mt-3 text-sm text-ink-muted">
                On hand {item.onHand} {item.uom} · on order {item.onOrder}
              </Text>
            </Card>
          ) : (
            <Card>
              <Text className="text-base font-semibold text-ink">Nothing scanned yet</Text>
              <Text className="mt-1 text-sm text-ink-muted">
                Scan a case barcode to pull up the item and log what arrived.
              </Text>
            </Card>
          )}

          {message ? <Text className="text-sm text-warn">{message}</Text> : null}

          {permission?.granted ? (
            <Button label={item ? 'Scan next item' : 'Start scanning'} onPress={() => setScanning(true)} />
          ) : (
            <View className="gap-2">
              <Text className="text-sm text-ink-muted">Foodline needs camera access to scan barcodes.</Text>
              <Button label="Allow camera" onPress={() => void requestPermission()} />
            </View>
          )}
        </View>
      </SafeAreaView>
    </Screen>
  );
}
