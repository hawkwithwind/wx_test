'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Countries', {
      id: {
	primaryKey: true,
	type: Sequelize.UUID,
	allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
	unique: true,
	allowNull: false,
        type: Sequelize.STRING(36)
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
    return queryInterface.dropTable('Countries');
  }
};
