#!/usr/bin/env bash

# Use half of total system memory for heap size, and start minimum at 25% of max heap
maxHeap=$(( $(head -1 /proc/meminfo | awk '{print $2}') / 1000 / 2 ))
minHeap=$(( maxHeap / 4 ))

/usr/bin/java -jar -Dspring.profiles.active=prod -Xmx${maxHeap}m -Xms${minHeap}m /usr/local/hiddenLegends/hidden-legends.jar