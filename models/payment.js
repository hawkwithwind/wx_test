'use strict';
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define('Payment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true      
    },
    sequnceNO: DataTypes.STRING,
    payAgencyCode: DataTypes.STRING,
    payAmount: DataTypes.DECIMAL(12,4),
    payTime: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
	Payment.belongsTo(models.Order, {foreignKey: 'orderId'});
	Payment.belongsTo(models.PayAgency, {foreignKey: 'payAgencyCode'});
      }
    }
  });
  return Payment;
};
