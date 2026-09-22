import { useQuery } from '@tanstack/react-query';
import React, { useDeferredValue, useState } from 'react';
import { FlatList, Pressable, RefreshControl, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState, ErrorState, Loading, Screen, StatusPill } from '@/components/ui';
import { useCompanyId } from '@/features/auth/auth-context';
import { api, type Item } from '@/lib/api';

const STATUS_LABEL: Record<Item['status'], string> = {
  ok: 'In stock',
  low: 'Below par',
  out: 'Out',
  over: 'Overstock',
};

export default function Items() {
  const [search, setSearch] = useState('');
  const [belowParOnly, setBelowParOnly] = useState(false);
  const deferredSearch = useDeferredValue(search);
  const companyId = useCompanyId();

  const items = useQuery({
    queryKey: ['items', companyId, deferredSearch, belowParOnly],
    queryFn: () => api.items.list(companyId, { search: deferredSearch, onlyBelowPar: belowParOnly }),
  });

  return (
    <Screen>
      <SafeAreaView className="flex-1" edges={['top']}>
        <View className="gap-3 px-5 pb-3 pt-2">
          <Text className="text-2xl font-bold text-ink">Inventory</Text>
          <TextInput
            className="h-11 rounded-xl border border-black/10 bg-surface-card px-4 text-base text-ink"
            placeholder="Search name or SKU"
            placeholderTextColor="#9CA3AF"
            autoCapitalize="none"
            value={search}
            onChangeText={setSearch}
          />
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: belowParOnly }}
            onPress={() => setBelowParOnly((v) => !v)}
            className={`self-start rounded-full px-3 py-1.5 ${belowParOnly ? 'bg-brand' : 'bg-black/5'}`}
          >
            <Text className={`text-xs font-semibold ${belowParOnly ? 'text-white' : 'text-ink-muted'}`}>
              Below par only
            </Text>
          </Pressable>
        </View>

        {items.isPending ? (
          <Loading label="Loading inventory" />
        ) : items.isError ? (
          <ErrorState message={(items.error as Error).message} onRetry={() => items.refetch()} />
        ) : (
          <FlatList
            data={items.data}
            keyExtractor={(i) => i.id}
            contentContainerClassName="gap-3 px-5 pb-10"
            refreshControl={<RefreshControl refreshing={items.isRefetching} onRefresh={() => items.refetch()} />}
            ListEmptyComponent={<EmptyState title="No items match" hint="Try a different search or clear the filter." />}
            renderItem={({ item }) => <ItemRow item={item} />}
          />
        )}
      </SafeAreaView>
    </Screen>
  );
}

function ItemRow({ item }: { item: Item }) {
  return (
    <View className="rounded-2xl border border-black/5 bg-surface-card p-4">
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1 gap-0.5">
          <Text className="text-xs font-medium text-ink-muted">{item.sku}</Text>
          <Text className="text-base font-semibold text-ink" numberOfLines={2}>
            {item.name}
          </Text>
          {item.primaryVendorName ? (
            <Text className="text-xs text-ink-muted">{item.primaryVendorName}</Text>
          ) : null}
        </View>
        <StatusPill status={item.status} label={STATUS_LABEL[item.status]} />
      </View>

      <View className="mt-3 flex-row gap-6">
        <Metric label="On hand" value={`${item.onHand} ${item.uom}`} />
        <Metric label="On order" value={`${item.onOrder}`} />
        <Metric label="Par" value={item.parLevel === null ? '—' : String(item.parLevel)} />
        <Metric label="Days cover" value={item.daysCover === null ? '—' : item.daysCover.toFixed(1)} />
      </View>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text className="text-[10px] font-medium uppercase text-ink-muted">{label}</Text>
      <Text className="text-sm font-semibold text-ink">{value}</Text>
    </View>
  );
}
