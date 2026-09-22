import { Redirect } from 'expo-router';
import React from 'react';

import { useAuth } from '@/features/auth/auth-context';
import { Loading, Screen } from '@/components/ui';

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <Screen>
        <Loading label="Starting Foodline" />
      </Screen>
    );
  }

  return <Redirect href={session ? '/(app)/hub' : '/(auth)/sign-in'} />;
}
