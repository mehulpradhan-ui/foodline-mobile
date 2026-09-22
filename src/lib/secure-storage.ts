import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

/**
 * Supabase session storage. SecureStore on device (Keychain / Keystore),
 * localStorage on web. SecureStore caps values at 2048 bytes, so long
 * sessions are chunked rather than silently dropped.
 */
const CHUNK = 1800;

async function setWeb(key: string, value: string) {
  globalThis.localStorage?.setItem(key, value);
}

export const secureStorage = {
  async getItem(key: string): Promise<string | null> {
    if (Platform.OS === 'web') return globalThis.localStorage?.getItem(key) ?? null;

    const head = await SecureStore.getItemAsync(key);
    if (head === null) return null;
    if (!head.startsWith('__chunks__:')) return head;

    const count = Number(head.slice('__chunks__:'.length));
    const parts: string[] = [];
    for (let i = 0; i < count; i += 1) {
      const part = await SecureStore.getItemAsync(`${key}__${i}`);
      if (part === null) return null;
      parts.push(part);
    }
    return parts.join('');
  },

  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === 'web') return setWeb(key, value);

    if (value.length <= CHUNK) {
      await SecureStore.setItemAsync(key, value);
      return;
    }
    const count = Math.ceil(value.length / CHUNK);
    for (let i = 0; i < count; i += 1) {
      await SecureStore.setItemAsync(`${key}__${i}`, value.slice(i * CHUNK, (i + 1) * CHUNK));
    }
    await SecureStore.setItemAsync(key, `__chunks__:${count}`);
  },

  async removeItem(key: string): Promise<void> {
    if (Platform.OS === 'web') {
      globalThis.localStorage?.removeItem(key);
      return;
    }
    const head = await SecureStore.getItemAsync(key);
    if (head?.startsWith('__chunks__:')) {
      const count = Number(head.slice('__chunks__:'.length));
      for (let i = 0; i < count; i += 1) await SecureStore.deleteItemAsync(`${key}__${i}`);
    }
    await SecureStore.deleteItemAsync(key);
  },
};
