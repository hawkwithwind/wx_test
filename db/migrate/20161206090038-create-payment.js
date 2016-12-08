'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      orderId: {
	allowNull: false,
	type: Sequelize.UUID,
	references: {
	  model: 'Orders',
	  key: 'id'
	}
      },
      sequnceNO: {
        type: Sequelize.STRING(128)
      },
      payAgencyCode: {
        type: Sequelize.STRING(36),
	references: {
	  model: 'PayAgencies',
	  key: 'code'
	}
      },
      payAmount: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      payTime: {
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
    return queryInterface.dropTable('Payments');
  }
};
