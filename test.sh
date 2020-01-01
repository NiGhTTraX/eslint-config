#!/usr/bin/env bash

set -e

PROJECT=$1
CONFIG=$2

cd packages/$2
yarn link

cd /tmp
git clone https://github.com/NiGhTTraX/$1.git
cd $1

yarn i --silent
yarn link @nighttrax/eslint-config-$2
yarn run lint
