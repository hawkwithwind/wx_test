'use strict';
module.exports = function(sequelize, DataTypes) {
  var PayAgency = sequelize.define('PayAgency', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        PayAgency.hasMany(models.Payment, {foreingKey: 'payAgencyCode'});
      }
    },
    paranoid: true
  });
  return PayAgency;
};
