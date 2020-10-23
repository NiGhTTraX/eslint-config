#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"

PROJECT=$1
CONFIG=$2
ORG=${3:brudi}

cd packages/"$CONFIG"
yarn link

cd /tmp
rm -rf "$PROJECT"
git clone https://github.com/$ORG/"$PROJECT".git
cd "$PROJECT"

yarn install
yarn link @brudi/eslint-config-"$CONFIG"
yarn run lint
