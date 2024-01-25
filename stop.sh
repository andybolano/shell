#!/bin/bash
if [ "$(docker ps -q -f name=dockerize-vue-sol-shell)" ]; then
    docker stop dockerize-vue-sol-shell
    echo "Container stopped."
else
    echo "Container is not executing"
fi