import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { COLORS, type IconName } from '@/components/ui';

/** The five-tab shell from the mockups: Home · My Work · Activity · Search · More. */
const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: 'index', title: 'Home', icon: 'home' },
  { name: 'my-work', title: 'My Work', icon: 'clipboard' },
  { name: 'activity', title: 'Activity', icon: 'bell' },
  { name: 'search', title: 'Search', icon: 'search' },
  { name: 'more', title: 'More', icon: 'more-horizontal' },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.brand,
        tabBarInactiveTintColor: COLORS.inkMuted,
        tabBarStyle: { backgroundColor: COLORS.card, borderTopColor: COLORS.line, height: 88, paddingTop: 8 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        sceneStyle: { backgroundColor: COLORS.surface },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => <Feather name={tab.icon} size={size ?? 22} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
