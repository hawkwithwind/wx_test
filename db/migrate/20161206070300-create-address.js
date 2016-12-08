'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID	
      },
      areaId: {
	allowNull: false,
        type: Sequelize.UUID,
	references: {
	  model: 'Areas',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
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
      addressDetail: {
	allowNull: false,
        type: Sequelize.STRING
      },
      contactName: {
	allowNull: false,
        type: Sequelize.STRING
      },
      contactPhone: {
	allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Addresses');
  }
};
