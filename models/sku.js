'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sku = sequelize.define('Sku', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    accountId: DataTypes.UUID,
    name: DataTypes.STRING,
    spec: DataTypes.STRING,
    detail: DataTypes.TEXT,
    barcode: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    taxRate: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        Sku.belongsTo(models.Account);
	Sku.belongsToMany(models.Resource, {
	  through: {
	    model: 'ItemResource',
	    unique: false,
	    scope: {
	      resourceOwnerCode: 'sku'
	    }
	  },
	  foreignKey: 'resourceOwnerId',
	  constraints: false
	});
	Sku.hasMany(models.SkuSnap);
	Sku.hasMany(models.OrderLine);
      }
    },
    paranoid: true
  });
  return Sku;
};
