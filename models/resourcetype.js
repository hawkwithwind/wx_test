'use strict';
module.exports = function(sequelize, DataTypes) {
  var ResourceType = sequelize.define('ResourceType', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    classMethods: {
      associate: function(models) {
	ResourceType.hasMany(models.Resource, {foriegnKey: 'resourceTypeCode'});        
      }
    }
  });
  return ResourceType;
};
