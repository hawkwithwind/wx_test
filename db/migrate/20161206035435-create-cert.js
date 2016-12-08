'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Certs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
	allowNull: false,
	type:Sequelize.UUID,
	references: {
	  model: 'Users',
	  key: 'id'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'	  
      },
      personName: {
	allowNull: false,
        type: Sequelize.STRING
      },
      certTypeCode: {
	allowNull: false,
        type: Sequelize.STRING(36),
	references: {
	  model: 'CertTypes',
	  key: 'code'
	},
	onUpdate: 'cascade',
	onDelete: 'cascade'
      },
      certCode: {
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
    return queryInterface.dropTable('Certs');
  }
};
