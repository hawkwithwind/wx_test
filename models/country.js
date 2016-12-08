'use strict';
module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    code: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Country.hasMany(models.AreaLevel, {foreignKey: 'countryCode'});
	Country.hasMany(models.Area, {foreignKey: 'countryCode'})
      }
    },
    paranoid: true
  });
  return Country;
};
