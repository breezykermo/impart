#!/bin/bash

# https://github.com/yongjhih/docker-parse-server


APP_ID=8683A294D744F6A55879C13E8374A \
APP_NAME=Impart \
MASTER_KEY=4A62D8929E5C2EAFC5AFFEC34B71B \
JAVASCRIPT_KEY=XgsxILrjVR2v45f7a43gY9VfV60WFMGp \
PARSE_DASHBOARD_ALLOW_INSECURE_HTTP=1 \
SERVER_URL=http://localhost:1337/parse \
USER1=admin \
USER1_PASSWORD=super_secure_password \
docker-compose up -d
