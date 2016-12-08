'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderLines', {
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
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },      
      skuId: {
	allowNull: false,
        type: Sequelize.UUID,
	references: {
	  model: 'Skus',
	  key: 'id'
	}
      },
      skuSnapId: {
	allowNull: false,
        type: Sequelize.UUID,
	references: {
	  model: 'SkuSnaps',
	  key: 'id'
	}
      },
      quantity: {
	allowNull: false,
        type: Sequelize.INTEGER
      },
      amount: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      taxAmount: {
	allowNull: false,
        type: Sequelize.DECIMAL(12,4)
      },
      discountAmount: {
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
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('OrderLines');
  }
};
