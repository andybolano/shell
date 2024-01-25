#!/bin/bash
#chmod +x start.sh

if [ "$(docker ps -q -f name=dockerize-vue-sol-shell)" ]; then
    echo "Image already is executing"
else
    docker rm dockerize-vue-sol-shell
    docker run -p 8080:8080 --name dockerize-vue-sol-shell -d sol-shell
fi