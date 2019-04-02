#!/usr/bin/env bash

set -eux
export PATH=.:$PATH

curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt-get update && sudo apt-get install -y nodejs openjdk-8-jdk
sudo npm i -g yarn
(cd src/jsMain && yarn install)
./gradlew jvmTest jsTest bootJar