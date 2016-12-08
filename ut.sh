#!/bin/bash

#echo "tearUp ..."
#NODE_ENV=test sequelize db:migrate:undo:all > /dev/null
#NODE_ENV=test sequelize db:migrate > /dev/null
#echo "done"

node_modules/.bin/mocha -u exports test/unittest/*

#echo "tearDown ..."
#NODE_ENV=test sequelize db:migrate:undo:all > /dev/null
#echo "done"

