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
      firstName: {
        type: Sequelize.STRING,
        allowNull:true
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:true
      },
      countryCode: {
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
      emailVerified: {
        type: Sequelize.BOOLEAN,
        allowNull:true
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull:true
      },
      phoneNoVerified: {
        type: Sequelize.BOOLEAN,
        allowNull:true
      },
      alternatePhoneNo: {
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
      lastLogin: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      noOfVisits: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      upComingVisitCount: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      canceledVisitCount: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      successVisitCount: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      referralCode: {
        type: Sequelize.STRING,
        allowNull:true
      },
      referralCount: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      role: {
        type: Sequelize.STRING,
        allowNull:true
      },
      status: {
        type: Sequelize.STRING,
        allowNull:true
      },
      profileScore: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      isLoggedIn: {
        type: Sequelize.BOOLEAN,
        allowNull:true
      },
      deviceType: {
        type: Sequelize.STRING,
        allowNull:true
      },
      networkOperator: {
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