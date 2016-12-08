'use strict';
module.exports = function(sequelize, DataTypes) {
  var RecipientCNSnap = sequelize.define('RecipientCNSnap', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    orderId: DataTypes.UUID,
    areaName: DataTypes.STRING,
    cityName: DataTypes.STRING,
    provinceName: DataTypes.STRING,
    addressDetail: DataTypes.STRING,
    contactName: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    certTypeCode: DataTypes.STRING,
    certCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
	RecipientCNSnap.belongsTo(models.Order);
      }
    }
  });
  return RecipientCNSnap;
};
