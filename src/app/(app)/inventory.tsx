import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useDeferredValue, useState } from 'react';
import { RefreshControl, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader, initialsFrom } from '@/components/app-header';
import {
  Button,
  Card,
  EmptyState,
  ErrorState,
  Group,
  ListRow,
  Loading,
  NoticeCard,
  Screen as ScreenRoot,
  SeeAllHeader,
  StatusPill,
} from '@/components/ui';
import { useAuth, useCompanyId } from '@/features/auth/auth-context';
import { api, type Item } from '@/lib/api';

const STATUS_LABEL: Record<Item['status'], string> = {
  ok: 'In stock',
  low: 'Below par',
  out: 'Out',
  over: 'Overstock',
};

/** Mockup 04 — Inventory Employee: stock work first, browsing second. */
export default function Inventory() {
  const { company } = useAuth();
  const companyId = useCompanyId();
  const [search, setSearch] = useState('');
  const [belowParOnly, setBelowParOnly] = useState(false);
  const deferred = useDeferredValue(search);

  const items = useQuery({
    queryKey: ['items', companyId, deferred, belowParOnly],
    queryFn: () => api.items.list(companyId, { search: deferred, onlyBelowPar: belowParOnly }),
  });

  const lowCount = (items.data ?? []).filter((i) => i.status === 'low' || i.status === 'out').length;

  return (
    <ScreenRoot>
      <SafeAreaView className="flex-1" edges={['top']}>
        <AppHeader
          context={company ? `Inventory · ${company.name}` : 'Inventory'}
          initials={initialsFrom(company?.name)}
        />

        <ScrollView
          contentContainerClassName="gap-5 px-5 pb-10 pt-3"
          keyboardShouldPersistTaps="handled"
          refreshControl={<RefreshControl refreshing={items.isRefetching} onRefresh={() => items.refetch()} />}
        >
          <Text className="text-3xl font-bold text-ink">Your stock work</Text>

          <Button label="Scan item or location" icon="maximize" onPress={() => router.push('/receiving')} />

          <View className="rounded-2xl border border-surface-line bg-surface-card px-4">
            <TextInput
              className="h-12 text-base text-ink"
              placeholder="Find item, lot or bin"
              placeholderTextColor="#8A96AF"
              autoCapitalize="none"
              value={search}
              onChangeText={setSearch}
            />
          </View>

          {lowCount > 0 ? (
            <NoticeCard
              tone="warn"
              title={`${lowCount} item${lowCount === 1 ? '' : 's'} below par`}
              body="Review before the next order guide run."
              actionLabel={belowParOnly ? 'Show everything' : 'Show only these'}
              onAction={() => setBelowParOnly((v) => !v)}
            />
          ) : null}

          <View className="gap-3">
            <SeeAllHeader title="Stock" onSeeAll={() => router.push('/tools/inventory')} />
            {items.isPending ? (
              <Loading label="Loading inventory" />
            ) : items.isError ? (
              <ErrorState message={(items.error as Error).message} onRetry={() => items.refetch()} />
            ) : items.data.length === 0 ? (
              <EmptyState title="No items match" hint="Try a different search or clear the filter." />
            ) : (
              <View className="gap-3">
                {items.data.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </View>
            )}
          </View>

          <Group>
            <ListRow
              icon="tool"
              title="Inventory tools"
              subtitle="Lots, counts, transfers, traceability"
              onPress={() => router.push('/tools/inventory')}
            />
          </Group>
        </ScrollView>
      </SafeAreaView>
    </ScreenRoot>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="p-4">
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
        <Metric label="On order" value={String(item.onOrder)} />
        <Metric label="Par" value={item.parLevel === null ? '—' : String(item.parLevel)} />
        <Metric label="Days cover" value={item.daysCover === null ? '—' : item.daysCover.toFixed(1)} />
      </View>
    </Card>
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
