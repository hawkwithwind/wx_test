'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id : {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    accountId: DataTypes.UUID
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Account);
	User.hasMany(models.Address);
	User.hasMany(models.Order);
	User.hasMany(models.Cert);
      }
    },
    paranoid: true
  });
  return User;
};
