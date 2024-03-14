'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserPreferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Cities',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Users',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      price:{
        type:Sequelize.INTEGER,
      },
      keyWords: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true, // Adjust allowNull as per your requirement
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: true, // Adjust allowNull as per your requirement
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
    await queryInterface.dropTable('UserPreferences');
  }
};