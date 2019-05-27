#!/usr/bin/env bash

set -e

PROJECT=$1
CONFIG=$2

cd packages/$2
npm link

cd /tmp
git clone https://github.com/NiGhTTraX/$1.git
cd $1
npm i
npm link @nighttrax/eslint-config-$2
npm run lint
