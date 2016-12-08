'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Resources', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      url: {
        type: Sequelize.STRING
      },
      resourceTypeCode: {
        type: Sequelize.STRING(36),
	allowNull: false,
	references: {
	  model: 'ResourceTypes',
	  key: 'code'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
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
    return queryInterface.dropTable('Resources');
  }
};
