import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

export function Screen({ children }: { children: React.ReactNode }) {
  return <View className="flex-1 bg-surface">{children}</View>;
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <View className={`rounded-2xl border border-black/5 bg-surface-card p-4 ${className}`} style={cardShadow}>
      {children}
    </View>
  );
}

const cardShadow = {
  shadowColor: '#0F172A',
  shadowOpacity: 0.06,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 2,
};

export function Button({
  label,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
}: {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'ghost';
}) {
  const isDisabled = disabled || loading;
  const base = 'h-12 flex-row items-center justify-center rounded-xl px-5';
  const tone = variant === 'primary' ? 'bg-brand' : 'border border-brand bg-transparent';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      onPress={onPress}
      disabled={isDisabled}
      className={`${base} ${tone} ${isDisabled ? 'opacity-50' : ''}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#008CD2'} />
      ) : (
        <Text className={`text-base font-semibold ${variant === 'primary' ? 'text-white' : 'text-brand'}`}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const TONE: Record<string, string> = {
  ok: 'bg-accent/10 text-accent-dark',
  low: 'bg-warn/10 text-warn',
  out: 'bg-danger/10 text-danger',
  over: 'bg-brand/10 text-brand-dark',
};

export function StatusPill({ status, label }: { status: string; label?: string }) {
  return (
    <View className={`self-start rounded-full px-2.5 py-1 ${TONE[status] ?? 'bg-black/5'}`}>
      <Text className={`text-xs font-semibold uppercase ${TONE[status] ?? 'text-ink-muted'}`}>{label ?? status}</Text>
    </View>
  );
}

export function Loading({ label = 'Loading' }: { label?: string }) {
  return (
    <View className="flex-1 items-center justify-center gap-3">
      <ActivityIndicator color="#008CD2" />
      <Text className="text-sm text-ink-muted">{label}</Text>
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-8">
      <Text className="text-center text-base font-semibold text-ink">Something went wrong</Text>
      <Text className="text-center text-sm text-ink-muted">{message}</Text>
      {onRetry ? <Button label="Try again" onPress={onRetry} variant="ghost" /> : null}
    </View>
  );
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <View className="items-center justify-center gap-2 py-16 px-8">
      <Text className="text-base font-semibold text-ink">{title}</Text>
      {hint ? <Text className="text-center text-sm text-ink-muted">{hint}</Text> : null}
    </View>
  );
}
