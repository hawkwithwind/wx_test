'use strict';
module.exports = function(sequelize, DataTypes) {
  var CertType = sequelize.define('CertType', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        CertType.hasMany(models.Cert, {foreignKey: 'certTypeCode'});
      }
    }
  });
  return CertType;
};
