'use strict';
module.exports = function(sequelize, DataTypes) {
  var ItemResource = sequelize.define('ItemResource', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    resourceId: {
      type: DataTypes.UUID,
      unique: 'item_resource_owner'
    },
    resourceOwnerId: {
      type: DataTypes.UUID,
      unique: 'item_resource_owner',
      references: null
    },
    resourceOwnerCode: {
      type: DataTypes.STRING,
      unique: 'item_resource_owner'
    }
  }, {
    classMethods: {
      associate: function(models) {
        // ...
      }
    }
  });
  return ItemResource;
};
