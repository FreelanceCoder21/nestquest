'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Users',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      agentId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Agents',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      productId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Products',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      tagged: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      isVisited: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      noOfVisits: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      noOfFormsFilled: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      date:{
        type: Sequelize.DATE,
        allowNull:false
      },
      slotId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Slots',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      type:{
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('Schedules');
  }
};