This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

---

# Foodline Mobile — project rules

This section is Foodline-specific and takes precedence over the generic Expo notes above.
It applies to **every** agent working in this repo: Codex, Claude Code, and Cowork.

## What this app is

The mobile client for **Foodline AI**, the ERP for independent food distributors
($5M–$500M revenue). It is a companion to the live web ERP, not a replacement.
Primary users are buyers and warehouse staff on a phone, often on bad connections.

**Backend is the ERP's existing Supabase project.** This app does not own data.

## The one architectural rule

Screens never import `@supabase/supabase-js`. They call `api` from `@/lib/api`.

```
src/app/**          screens — expo-router, presentation + local state only
src/lib/api/ports.ts     the interface every backend must satisfy
src/lib/api/supabase-adapter.ts   the live implementation (RLS + RPC)
src/lib/api/demo-adapter.ts       bundled fixtures, zero network
src/lib/api/types.ts     OUR domain types, not raw DB rows
```

If the ERP schema changes, the fix belongs in the adapter's mappers. If a screen
has a `snake_case` field name in it, that is a bug.

**Writes that touch inventory, orders or money go through Postgres functions
(`supabase.rpc`), never direct table writes.** Business rules must not be
duplicated between the web ERP and this app — that divergence is the failure mode
we are explicitly designing against.

## Demo mode

`EXPO_PUBLIC_DEMO_MODE=1` runs the entire app on fixtures in `demo-adapter.ts`.
Every screen must work in demo mode — it is how the app gets demoed on a plane,
in a customer's warehouse, and in any environment where Supabase is unreachable.
When you add a screen, add its fixtures.

## Conventions

- TypeScript strict. No `any` outside adapter mapper boundaries (already isolated there).
- NativeWind classes for styling. Brand tokens live in `tailwind.config.js` — use
  `brand`, `accent`, `ink`, `surface`, never raw hex in components.
- Server state: TanStack Query. Local state: `useState`. No Redux, no MobX, no Zustand.
- Every list screen needs loading, error, empty and pull-to-refresh states. Use the
  primitives in `@/components/ui` rather than rolling new ones.
- Touch targets ≥ 44pt. This is used with cold hands in a walk-in cooler.

## Before you say a task is done

```bash
npm run typecheck   # must pass clean
npm run lint
```

Do not commit `ios/` or `android/` — they are generated by `expo prebuild` (CNG).
Native config belongs in `app.json` or a config plugin.

## Multi-machine, multi-agent workflow

Three machines touch this repo (MacBook Air, Mac Studio, cloud sessions) and three
agents write to it. Git is the only source of truth.

1. **Always `git pull --rebase` before starting.** Another agent or machine may have pushed.
2. **One branch per task**, named `feat/…`, `fix/…`, `chore/…`. Never commit straight to `main`.
3. **Commit before switching machines**, even mid-task — push a WIP commit rather than
   leaving work on a laptop that is about to be closed.
4. **Never force-push shared branches.**
5. `scripts/bootstrap.sh` brings any machine to a working state from a fresh clone.

## Build reality (read before promising a build)

- **No Android Studio or Xcode is required anywhere.** Android Studio is an IDE around
  Gradle + the Android SDK; CI installs those directly.
- Debug APK on every push: `.github/workflows/android.yml` → download from the run's artifacts.
- iOS and release builds: `eas build` (Expo's cloud Macs) via `.github/workflows/eas.yml`.
- Local Mac builds still work (`npm run ios` / `npm run android`) but are never required.
- Cloud sandboxes cannot run an Android emulator (no KVM) — they can build an APK, not run one.
