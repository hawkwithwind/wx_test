'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shipment = sequelize.define('Shipment', {
    orderId: DataTypes.UUID,
    shipPrice: DataTypes.DECIMAL,
    shipAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
	Shipment.belongsTo(models.Order);
        Shipment.hasMany(models.Logistics, {foreignKey: 'shipmentId'});	
      }
    }
  });
  return Shipment;
};
