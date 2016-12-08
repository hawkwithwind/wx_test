'use strict';
module.exports = function(sequelize, DataTypes) {
  var SkuSnap = sequelize.define('SkuSnap', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    spec: DataTypes.STRING,
    detail: DataTypes.TEXT,
    barcode: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    taxRate: DataTypes.DECIMAL,
    skuId: DataTypes.UUID
  }, {
    classMethods: {
      associate: function(models) {
        SkuSnap.belongsTo(models.Sku);
	SkuSnap.hasOne(models.OrderLine);
      }
    }
  });
  return SkuSnap;
};
