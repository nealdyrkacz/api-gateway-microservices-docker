#!/bin/sh
cd /app

npm run db:migrate

npm run servicea:dev:start
