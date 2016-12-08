'use strict';
module.exports = function(sequelize, DataTypes) {
  var Logistics = sequelize.define('Logistics', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    shipmentId: DataTypes.UUID,
    logisticsCompany: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logisticsCompanyCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logisticsNO: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Logistics.belongsTo(models.Shipment, {foreignKey: 'shipmentId'});
      }
    }
  });
  return Logistics;
};
