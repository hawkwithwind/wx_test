'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('AreaLevels', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
	allowNull: false,
        type: Sequelize.STRING
      },
      parentId: {
	type: Sequelize.UUID,
	references: {
	  model: 'AreaLevels',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      countryId: {
	allowNull: false,
	type: Sequelize.UUID,
	references: {
	  model: 'Countries',
	  key: 'id'
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
    return queryInterface.dropTable('AreaLevels');
  }
};
