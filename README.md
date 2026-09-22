# Foodline Mobile

iOS + Android client for the Foodline AI ERP. One codebase, Expo SDK 57 / React Native 0.86.

## Quick start on any machine

```bash
git clone <repo> && cd foodline-mobile
./scripts/bootstrap.sh
npm run start:go        # scan the QR code with Expo Go
```

Ships in **demo mode** by default (`EXPO_PUBLIC_DEMO_MODE=1`) — full app, bundled
fixtures, no backend, works offline. Edit `.env.local` to point at Supabase.

## Getting a build without Android Studio or Xcode

| You want | Do this | Needs |
|---|---|---|
| Android APK to sideload | Push a branch → GitHub Actions **Android APK** → download artifact | Nothing local |
| iOS build / TestFlight | Actions → **EAS Cloud Build** → run workflow | `EXPO_TOKEN` secret |
| Live reload on a phone | `npm run start:go` | Expo Go app |
| Native debugging | `npm run android` / `npm run ios` on a Mac | Android SDK / Xcode |

Neither Mac needs Android Studio. Gradle and the Android SDK are installed by CI.

## Layout

```
src/app/            screens (expo-router, file = route)
src/lib/api/        the only place that knows about the backend
src/components/ui/  shared primitives
src/features/       cross-screen logic (auth)
```

`AGENTS.md` is the contract every agent and machine follows. Read it first.

## Wiring to the live ERP

1. `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
2. Fill in the `TABLES` / `RPC` maps at the top of `src/lib/api/supabase-adapter.ts`
3. Set the Supabase vars in `.env.local` and drop `EXPO_PUBLIC_DEMO_MODE`

Nothing outside that adapter should need to change.
