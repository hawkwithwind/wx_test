'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
	allowNull: false,
        type: Sequelize.UUID,
	references: {
	  model: 'Users',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      orderStatus: {
	allowNull: false,
        type: Sequelize.INTEGER
      },
      orderAt: {
	allowNull: false,
        type: Sequelize.DATE
      },
      orderAmount: {
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
      },
      deleteAt: {
	allowNull: false,
	type: Sequelize.DATE
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Orders');
  }
};
