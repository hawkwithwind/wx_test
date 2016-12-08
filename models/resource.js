'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    url: {      
      type: DataTypes.STRING,
      allowNull: false
    },
    resourceTypeCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Resource.belongsTo(models.ResourceType, {foriegnKey: 'resourceTypeCode'});
	Resource.belongsToMany(models.Cert, {
	  through: {
	    model: 'ItemResource',
	    unique: false	    
	  },
	  foreignKey: 'resourceId',
	  constraints: false
	});
      }
    }
  });
  return Resource;
};
