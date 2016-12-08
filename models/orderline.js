'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrderLine = sequelize.define('OrderLine', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    orderId: DataTypes.UUID,
    skuId: DataTypes.UUID,
    skuSnapId: DataTypes.UUID,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    taxAmount: DataTypes.DECIMAL,
    discountAmount: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        OrderLine.belongsTo(models.Order);
	OrderLine.belongsTo(models.Sku);
	OrderLine.belongsTo(models.SkuSnap);
      }
    }
  });
  return OrderLine;
};
