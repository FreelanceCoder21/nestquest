'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EOIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Brands',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      //doubt
      configuration:{
        type:Sequelize.STRING
      },
      image:{
        type:Sequelize.STRING
      },
      reraNo:{
        type:Sequelize.STRING
      },
      endDate:{
        type: Sequelize.DATE
      },
      cityId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Cities',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      regionId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Regions',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      locationId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Locations',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
     offerId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Offers',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
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
    await queryInterface.dropTable('EOIs');
  }
};