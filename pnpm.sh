#!/usr/bin/env bash
set -e
npm i -g pnpm --registry=https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com
pnpm add -g pnpm
pnpm -v
pnpm config get registry
pnpm install
cd -
exec /bin/bash