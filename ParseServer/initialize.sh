#!/bin/bash

## NB: 'parseserver_mongo_1' should be whatever the name of your mongo container is
## It should always be parseserver_mongo_1 if you ran with run.sh
docker exec parseserver_mongo_1 mongorestore --db dev /backups/dev
