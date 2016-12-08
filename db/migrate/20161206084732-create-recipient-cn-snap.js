'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('RecipientCNSnaps', {
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
      areaName: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      provinceName: {
        type: Sequelize.STRING
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
      certTypeCode: {
        type: Sequelize.STRING
      },
      certCode: {
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
    return queryInterface.dropTable('RecipientCNSnaps');
  }
};
