'use strict';
module.exports = function(sequelize, DataTypes) {
  var AreaLevel = sequelize.define('AreaLevel', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
    //parentId: DataTypes.UUID,
    //countryId: DataTypes.UUID
  }, {
    classMethods: {
      associate: function(models) {
        AreaLevel.belongsTo(models.Country, {foreignKey: 'countryId'});
	AreaLevel.belongsTo(models.AreaLevel, {as: 'Parent', foreignKey: 'parentId'});
	AreaLevel.hasMany(models.Area, {foreignKey: 'areaLevelId'});
      }
    },
    paranoid: true
  });
  return AreaLevel;
};
