import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState, Group, ListRow, Loading, Screen } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';

/**
 * Shown when the actor belongs to more than one company. `application_session_context`
 * returns the list; selecting one sets the `x-erp-company-id` header for every call.
 */
export default function SelectCompany() {
  const { session, companyId, selectCompany, loading } = useAuth();
  const [busy, setBusy] = useState<string | null>(null);

  if (loading) {
    return (
      <Screen>
        <Loading />
      </Screen>
    );
  }

  const companies = session?.companies ?? [];

  return (
    <Screen>
      <SafeAreaView className="flex-1" edges={['top']}>
        <View className="gap-5 px-5 pt-6">
          <View className="gap-1">
            <Text className="text-3xl font-bold text-ink">Choose a company</Text>
            <Text className="text-base text-ink-muted">
              You have access to more than one. You can switch any time from More.
            </Text>
          </View>

          {companies.length === 0 ? (
            <EmptyState
              title="No company access"
              hint="Your account is not a member of any Foodline company yet."
            />
          ) : (
            <Group>
              {companies.map((c) => (
                <ListRow
                  key={c.id}
                  icon={c.id === companyId ? 'check-circle' : 'briefcase'}
                  title={c.name}
                  subtitle={c.roleKey}
                  onPress={async () => {
                    setBusy(c.id);
                    try {
                      await selectCompany(c.id);
                      router.replace('/(app)/(tabs)');
                    } finally {
                      setBusy(null);
                    }
                  }}
                  trailing={busy === c.id ? <Loading label="" /> : undefined}
                />
              ))}
            </Group>
          )}
        </View>
      </SafeAreaView>
    </Screen>
  );
}
