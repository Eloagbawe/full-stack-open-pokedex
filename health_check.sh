#!/bin/bash

# echo "Hello from shell script"
res=$(curl -s http://localhost:3000/health)

if [[ "$res" == "ok" ]]
then
    exit 0
else
    exit 1
fi
