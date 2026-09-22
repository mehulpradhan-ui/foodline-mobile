import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FlatList, Pressable, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState, ErrorState, Loading, Screen } from '@/components/ui';
import { useCompanyId } from '@/features/auth/auth-context';
import { api, type PurchaseOrder } from '@/lib/api';

const STATUS_TONE: Record<PurchaseOrder['status'], string> = {
  draft: 'bg-black/5 text-ink-muted',
  sent: 'bg-brand/10 text-brand-dark',
  confirmed: 'bg-brand/10 text-brand-dark',
  partial: 'bg-warn/10 text-warn',
  received: 'bg-accent/10 text-accent-dark',
  cancelled: 'bg-danger/10 text-danger',
};

export default function Orders() {
  const [showAll, setShowAll] = useState(false);
  const companyId = useCompanyId();
  const orders = useQuery({
    queryKey: ['purchase-orders', companyId, showAll],
    queryFn: () => api.purchaseOrders.list(companyId, { openOnly: !showAll }),
  });

  return (
    <Screen>
      <SafeAreaView className="flex-1" edges={['top']}>
        <View className="gap-3 px-5 pb-3 pt-2">
          <Text className="text-2xl font-bold text-ink">Purchasing</Text>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: showAll }}
            onPress={() => setShowAll((v) => !v)}
            className={`self-start rounded-full px-3 py-1.5 ${showAll ? 'bg-brand' : 'bg-black/5'}`}
          >
            <Text className={`text-xs font-semibold ${showAll ? 'text-white' : 'text-ink-muted'}`}>
              {showAll ? 'Showing all orders' : 'Open orders only'}
            </Text>
          </Pressable>
        </View>

        {orders.isPending ? (
          <Loading label="Loading purchase orders" />
        ) : orders.isError ? (
          <ErrorState message={(orders.error as Error).message} onRetry={() => orders.refetch()} />
        ) : (
          <FlatList
            data={orders.data}
            keyExtractor={(o) => o.id}
            contentContainerClassName="gap-3 px-5 pb-10"
            refreshControl={<RefreshControl refreshing={orders.isRefetching} onRefresh={() => orders.refetch()} />}
            ListEmptyComponent={<EmptyState title="No purchase orders" hint="Open orders will appear here." />}
            renderItem={({ item }) => (
              <View className="rounded-2xl border border-black/5 bg-surface-card p-4">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-semibold text-ink">{item.number}</Text>
                  <View className={`rounded-full px-2.5 py-1 ${STATUS_TONE[item.status]}`}>
                    <Text className={`text-xs font-semibold uppercase ${STATUS_TONE[item.status]}`}>{item.status}</Text>
                  </View>
                </View>
                <Text className="mt-1 text-sm text-ink-muted">{item.vendorName}</Text>
                <View className="mt-3 flex-row justify-between">
                  <Text className="text-xs text-ink-muted">
                    {item.lineCount} line{item.lineCount === 1 ? '' : 's'}
                    {item.expectedAt ? ` · due ${item.expectedAt}` : ''}
                  </Text>
                  <Text className="text-sm font-semibold text-ink">
                    {item.total === null ? '—' : `$${item.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </Screen>
  );
}
