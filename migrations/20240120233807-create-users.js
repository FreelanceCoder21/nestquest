'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:true
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
      emailId: {
        type: Sequelize.STRING,
        allowNull:true
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull:true
      },
      location: {
        type: Sequelize.STRING,
        allowNull:true
      },
      ipAddress: {
        type: Sequelize.STRING,
        allowNull:true
      },
      deviceId: {
        type: Sequelize.STRING,
        allowNull:true
      },
      otp: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      jwt: {
        type: Sequelize.STRING,
        allowNull:true
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
    await queryInterface.dropTable('Users');
  }
};