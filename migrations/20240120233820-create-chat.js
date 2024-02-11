'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Users',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },

  //doubt
      // agentId: {
      //   type:Sequelize.INTEGER,
      //   allowNull:true,
      //   references:{
      //     model:'Agents',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },

      message: {
        type: Sequelize.TEXT 
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
    await queryInterface.dropTable('Chats');
  }
};