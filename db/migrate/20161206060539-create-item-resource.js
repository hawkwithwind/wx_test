'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ItemResources', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      resourceId: {
        type: Sequelize.UUID,
	references: {
	  model: 'Resources',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'	
      },
      resourceOwnerId: {
        type: Sequelize.UUID,
	references: null
      },
      resourceOwnerCode: Sequelize.STRING(36),
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
    return queryInterface.dropTable('ItemResources');
  }
};
