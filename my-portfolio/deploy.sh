#!/usr/bin/env bash
set -euo pipefail

# Always run from the directory where this script lives
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Checking gh-pages installation..."
if [ ! -f node_modules/.bin/gh-pages ]; then
  echo "gh-pages not found. Installing..."
  npm i -D gh-pages
fi

echo "Building..."
npm run build

echo "Deploying to GitHub Pages..."
if [ -n "${CUSTOM_DOMAIN-}" ]; then
  echo "Using custom domain: $CUSTOM_DOMAIN"
  npx gh-pages -d dist -c "$CUSTOM_DOMAIN"
else
  npx gh-pages -d dist
fi

echo "Deployment complete."


