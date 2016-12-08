'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: DataTypes.UUID,
    orderStatus: DataTypes.INTEGER,
    orderAt: DataTypes.DATE,
    orderAmount: DataTypes.DECIMAL,
    discountAmount: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.User);
	Order.hasMany(models.RecipientCNSnap, {foreignKey: 'orderId'});
	Order.hasMany(models.Payment);
	Order.hasMany(models.Shipment);
	Order.hasMany(models.OrderLine);
      }
    },
    paranoid: true
  });
  return Order;
};
