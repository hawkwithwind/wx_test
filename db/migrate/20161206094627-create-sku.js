'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Skus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      accountId: {
	type: Sequelize.UUID,
	references: {
	  model: 'Accounts',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      name: {
	allowNull: false,
        type: Sequelize.STRING
      },
      spec: {
	allowNull: false,
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      barcode: {
	allowNull: false,
        type: Sequelize.STRING(36)
      },
      price: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      taxRate: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
	allowNull: false,
	type: Sequelize.DATE
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Skus');
  }
};
