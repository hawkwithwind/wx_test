'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('SkuSnaps', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
	allowNull:false,
        type: Sequelize.STRING
      },
      spec: {
	allowNull:false,
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      barcode: {
	allowNull:false,
        type: Sequelize.STRING(36)
      },
      price: {
	allowNull:false,
        type: Sequelize.DECIMAL
      },
      taxRate: {
	allowNull:false,
        type: Sequelize.DECIMAL
      },
      skuId: {
	allowNull: false,
        type: Sequelize.UUID,
	references: {
	  model: 'Skus',
	  key: 'id'
	}
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
    return queryInterface.dropTable('SkuSnaps');
  }
};
