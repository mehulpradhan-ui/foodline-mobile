import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text, type ColorValue } from 'react-native';

import { Loading, Screen } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';

function TabIcon({ glyph, color }: { glyph: string; color: ColorValue }) {
  return <Text style={{ color, fontSize: 20 }}>{glyph}</Text>;
}

export default function AppLayout() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <Screen>
        <Loading />
      </Screen>
    );
  }
  if (!session) return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#008CD2',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopColor: 'rgba(0,0,0,0.06)' },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="hub"
        options={{ title: 'Hub', tabBarIcon: ({ color }) => <TabIcon glyph="◎" color={color} /> }}
      />
      <Tabs.Screen
        name="items"
        options={{ title: 'Inventory', tabBarIcon: ({ color }) => <TabIcon glyph="▦" color={color} /> }}
      />
      <Tabs.Screen
        name="orders"
        options={{ title: 'Purchasing', tabBarIcon: ({ color }) => <TabIcon glyph="⇄" color={color} /> }}
      />
      <Tabs.Screen
        name="receiving"
        options={{ title: 'Receiving', tabBarIcon: ({ color }) => <TabIcon glyph="⌗" color={color} /> }}
      />
    </Tabs>
  );
}
