#!/bin/bash -eu
# TODO -> rename to generate-config

# Reset config file
>./web-app/dist/config.js
# Find all the MY_APP_ environment variables in the environment
declare -a customVars
for key in $(env | awk -F "=" '{print $1}' | grep ".*JS_WISDOM_.*"); do
    customVars+=($key)
done
# Recreate a new config.js
for key in "${customVars[@]}"; do
    echo "window.$key='${!key}';" >>./web-app/dist/config.js
done
