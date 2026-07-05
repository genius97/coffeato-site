#!/usr/bin/env bash
# One-command deploy to Vercel (run from inside this folder).
# You must be logged in once:  vercel login
set -e
if ! command -v vercel >/dev/null 2>&1; then
  echo "Installing Vercel CLI..."; npm i -g vercel
fi
echo "Deploying preview..."
vercel                 # preview URL
echo ""
echo "For production:  vercel --prod"
