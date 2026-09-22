#!/usr/bin/env bash
# Bring any machine (MacBook Air, Mac Studio, cloud sandbox) to a working state.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "▸ Node $(node -v)"
command -v node >/dev/null || { echo "Install Node 22+ first (nvm install 22)"; exit 1; }

echo "▸ Installing dependencies"
npm ci 2>/dev/null || npm install

if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "▸ Created .env.local from .env.example (demo mode on — edit to point at Supabase)"
fi

echo "▸ Typechecking"
npm run typecheck

cat <<'EOF'

Ready. Next:

  npm run start:go     Expo Go — fastest, JS-only changes
  npm run start        dev client — needed once native modules change
  npm run android      build + run on a connected Android device (needs Android SDK)
  npm run ios          build + run in the iOS simulator (macOS + Xcode only)

No Android Studio? That is fine. Push to a branch and grab the APK from
GitHub Actions → "Android APK" → artifacts.
EOF
