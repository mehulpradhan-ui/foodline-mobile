import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Card, EmptyState, ErrorState, Loading, Screen } from '@/components/ui';
import { useAuth, useCompanyId } from '@/features/auth/auth-context';
import { api, type HubMetric } from '@/lib/api';
import { env, isDemoMode } from '@/lib/env';

const TONE_TEXT: Record<HubMetric['tone'], string> = {
  neutral: 'text-ink',
  good: 'text-accent-dark',
  warn: 'text-warn',
  bad: 'text-danger',
};

export default function Hub() {
  const { session, company, signOut } = useAuth();
  const companyId = useCompanyId();
  const metrics = useQuery({
    queryKey: ['hub', 'metrics', companyId],
    queryFn: () => api.hub.metrics(companyId),
  });

  return (
    <Screen>
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView
          contentContainerClassName="gap-5 px-5 pb-10 pt-2"
          refreshControl={<RefreshControl refreshing={metrics.isRefetching} onRefresh={() => metrics.refetch()} />}
        >
          <View className="gap-1">
            <Text className="text-sm font-medium text-ink-muted">{company?.name ?? 'Foodline'}</Text>
            <Text className="text-2xl font-bold text-ink">Today</Text>
            {isDemoMode ? (
              <Text className="text-xs font-semibold uppercase text-warn">Demo data · v{env.version}</Text>
            ) : null}
          </View>

          {metrics.isPending ? (
            <View className="h-40">
              <Loading label="Loading your hub" />
            </View>
          ) : metrics.isError ? (
            <ErrorState message={(metrics.error as Error).message} onRetry={() => metrics.refetch()} />
          ) : metrics.data.length === 0 ? (
            <EmptyState title="No metrics yet" hint="The dashboard populates once there is activity." />
          ) : (
            <View className="flex-row flex-wrap gap-3">
              {metrics.data.map((m) => (
                <Card key={m.key} className="min-w-[46%] flex-1">
                  <Text className="text-xs font-medium uppercase text-ink-muted">{m.label}</Text>
                  <Text className={`mt-2 text-3xl font-bold ${TONE_TEXT[m.tone]}`}>{m.value}</Text>
                  {m.delta !== null ? (
                    <Text className="mt-1 text-xs text-ink-muted">
                      {m.delta > 0 ? '▲' : m.delta < 0 ? '▼' : '—'} {Math.abs(m.delta)}% vs last week
                    </Text>
                  ) : null}
                </Card>
              ))}
            </View>
          )}

          <Card>
            <Text className="text-base font-semibold text-ink">Session</Text>
            <Text className="mt-1 text-sm text-ink-muted">
              {company?.roleKey ?? 'unknown role'} · {session?.companies.length ?? 0} company
              {session?.companies.length === 1 ? '' : 'ies'}
            </Text>
            <View className="mt-4">
              <Button label="Sign out" variant="ghost" onPress={() => void signOut()} />
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}
