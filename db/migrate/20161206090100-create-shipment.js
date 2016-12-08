'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      orderId: {
	allowNUll: false,
	type: Sequelize.UUID,
	references: {
	  model: 'Orders',
	  key: 'id'
	}
      },
      shipPrice: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      shipAt: {
	allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Shipments');
  }
};
