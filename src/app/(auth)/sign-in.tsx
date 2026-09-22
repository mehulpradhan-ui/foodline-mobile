import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Screen } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { isDemoMode } from '@/lib/env';

export default function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState(isDemoMode ? 'demo@foodline.ai' : '');
  const [password, setPassword] = useState(isDemoMode ? 'demo' : '');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit() {
    setError(null);
    setBusy(true);
    try {
      await signIn(email.trim(), password);
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
        <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View className="flex-1 justify-center gap-6 px-7">
            <View className="gap-2">
              <Text className="text-3xl font-bold text-ink">Foodline</Text>
              <Text className="text-base text-ink-muted">
                {isDemoMode ? 'Demo mode — any credentials will do.' : 'Sign in to your distribution workspace.'}
              </Text>
            </View>

            <View className="gap-3">
              <TextInput
                className="h-12 rounded-xl border border-black/10 bg-surface-card px-4 text-base text-ink"
                placeholder="Work email"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                className="h-12 rounded-xl border border-black/10 bg-surface-card px-4 text-base text-ink"
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                autoComplete="current-password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={onSubmit}
              />
            </View>

            {error ? <Text className="text-sm text-danger">{error}</Text> : null}

            <Button label="Sign in" onPress={onSubmit} loading={busy} disabled={!email || !password} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Screen>
  );
}
