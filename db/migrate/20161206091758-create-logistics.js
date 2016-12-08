'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Logistics', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      shipmentId: {
	allowNull: false,
	type: Sequelize.UUID,
	references: {
	  model: 'Shipments',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      logisticsCompany: {
        type: Sequelize.STRING
      },
      logisticsCompanyCode: {
        type: Sequelize.STRING(36)	
      },
      logisticsNO: {
        type: Sequelize.STRING(128)
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
    return queryInterface.dropTable('Logistics');
  }
};
