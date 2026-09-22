import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Screen } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { isDemoMode } from '@/lib/env';

export default function SignIn() {
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit() {
    setError(null);
    setBusy(true);
    try {
      await signIn();
      router.replace('/(app)/hub');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Sign-in failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <Screen>
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center gap-8 px-7">
          <View className="gap-2">
            <Text className="text-3xl font-bold text-ink">Foodline</Text>
            <Text className="text-base text-ink-muted">
              {isDemoMode
                ? 'Demo mode — tap continue, no account needed.'
                : 'Sign in with your Foodline account to continue.'}
            </Text>
          </View>

          {error ? <Text className="text-sm text-danger">{error}</Text> : null}

          <Button label={isDemoMode ? 'Continue' : 'Sign in'} onPress={onSubmit} loading={busy} />

          {!isDemoMode ? (
            <Text className="text-center text-xs text-ink-muted">
              Authentication is handled by Foodline&apos;s identity provider. Your password is never
              entered in this app.
            </Text>
          ) : null}
        </View>
      </SafeAreaView>
    </Screen>
  );
}
