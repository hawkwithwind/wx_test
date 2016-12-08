'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Areas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
	allowNull: false,
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING(36)
      },
      parentId: {
	type: Sequelize.UUID,
	references: {
	  model: 'Areas',
	  key: 'id'
	}
      },
      areaLevelId: {
	allowNull: false,
	type: Sequelize.UUID,
	references: {
	  model: 'AreaLevels',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      countryCode: {
	allowNull: false,
	type: Sequelize.STRING(36),
	references: {
	  model: 'Countries',
	  key: 'code'
	},
	onUpdate: 'cascade',
	onDeelte: 'cascade'
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
    return queryInterface.dropTable('Areas');
  }
};
