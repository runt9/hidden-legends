#!/usr/bin/env bash

set -eux
export PATH=.:$PATH

(cd src/jsMain && yarn install)
./gradlew jvmTest jsTest bootJar