#!/usr/bin/env bash

set -eux
export PATH=.:$PATH

curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get update && apt-get install -y nodejs
npm i -g yarn
(cd src/jsMain && yarn install)
./gradlew jvmTest jsTest bootJar