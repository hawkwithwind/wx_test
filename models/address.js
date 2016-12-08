'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: DataTypes.UUID,
    areaId: DataTypes.UUID,
    addressDetail: DataTypes.STRING,
    contactName: DataTypes.STRING,
    contactPhone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Address.belongsTo(models.User, {foreignKey: 'userId'});
	Address.belongsTo(models.Area, {foreignKey: 'areaId'});
      }
    }
  });
  return Address;
};
