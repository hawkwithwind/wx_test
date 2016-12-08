'use strict';
module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define('Area', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    parentId: DataTypes.UUID,
    areaLevelId: DataTypes.UUID,
    countryCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Area.belongsTo(models.Area, {as: 'Parent', foreignKey: 'parentId'});
	Area.belongsTo(models.AreaLevel, {foreignKey: 'areaLevelId'});
	Area.belongsTo(models.Country, {foreignKey: 'countryCode'});
	Area.hasMany(models.Address, {foreignKey: 'areaId'});
      }
    },
    paranoid: true
  });
  return Area;
};
