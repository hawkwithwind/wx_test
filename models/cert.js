'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cert = sequelize.define('Cert', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: DataTypes.UUID,    
    personName: DataTypes.STRING,
    certTypeCode: DataTypes.STRING,
    certCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Cert.belongsTo(models.CertType, {foreignKey: 'certTypeCode'});
	Cert.belongsToMany(models.Resource, {
	  through: {
	    model: 'ItemResource',
	    unique: false,
	    scope: {
	      resourceOwnerCode: 'cert'
	    }
	  },
	  foreignKey : 'resourceOwnerId',
	  constraints: false
	});
	Cert.belongsTo(models.User);
      }
    }
  });
  return Cert;
};
