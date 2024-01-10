'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EOIFormConfigurations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eoiFormId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EOIForms',
          key: 'id'

        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      configurationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Configurations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EOIFormConfigurations');
  }
};