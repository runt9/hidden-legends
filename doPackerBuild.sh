#!/bin/bash

jarFile=$(find ./build/libs/ -regex ".*/hidden-legends-[0-9]+.[0-9]+.[0-9]+.jar")
version=$(echo ${jarFile} | sed -rn 's/^.*hidden-legends-([0-9]+\.[0-9]+\.[0-9]+).*.jar$/\1/p')

packer build -var "hidden-legends-version=$version" -var "hidden-legends-jar-file=$jarFile" packer.json