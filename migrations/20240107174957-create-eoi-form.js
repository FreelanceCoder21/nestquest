'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EOIForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      eoiId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'EOIs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status:{
        type: Sequelize.STRING
      },
      // configurationIds:{
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: 'Configurations',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      //checkId pending
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EOIForms');
  }
};