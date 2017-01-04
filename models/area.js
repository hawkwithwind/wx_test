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
	Area.belongsTo(models.AreaLevel);
	Area.belongsTo(models.Country);
	Area.hasMany(models.Address);
      }
    },
    paranoid: true
  });
  return Area;
};
