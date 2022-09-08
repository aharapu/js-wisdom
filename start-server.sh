#!/bin/sh
echo "Current environment is $ENVIRONMENT ."
export DENO_DIR="./web-server/deno_cache"

# TODO -> put equality check in a variable?
if [ $ENVIRONMENT = "DEVELOPMENT" ]; then
    export PORT="3001"
    export WEB_APP_SRC="/web-app/src"
else
    export PORT="443"
    export WEB_APP_SRC="/web-app/dist"
fi

# TODO -> put equality check in a variable?
if [ $ENVIRONMENT = "DEVELOPMENT" ]; then
    echo "Starting development server."
    xdg-open http://localhost:3001
    exec denon run --allow-net --allow-read --allow-env ./web-server/src/server.ts
else
    echo "Starting web server."
    exec deno run --allow-net --allow-read --allow-env ./web-server/src/server.ts
fi
