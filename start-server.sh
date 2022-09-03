#!/bin/sh

DENO_DIR="./web-server/src/deno_cache"

echo "Starting web server."
exec denon run --allow-net --allow-read --allow-env ./web-server/src/server.ts

# type command to start deno with cached import here
# DENO_DIR=./deno_cache deno run --allow-net --allow-read server.ts
