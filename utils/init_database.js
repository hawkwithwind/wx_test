#!/usr/bin/env node
const sequelize_fixtures = require('sequelize-fixtures');

const models = require('../models');

models.sequelize.transaction(function(tx){
  return sequelize_fixtures.loadFile(
    '../db/fixtures/china_area_level.json', models, {transaction:tx});
});
