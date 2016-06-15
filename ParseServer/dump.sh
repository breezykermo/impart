#!/bin/bash

docker exec parseserver_mongo_1 mongodump -o /backups/dev
