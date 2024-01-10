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
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      image: {  
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.DATE
      },
      reraNo: {
        unique: true,
        type: Sequelize.STRING
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductLocations',
          key: 'id'
        },    
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Brands',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
//array of FAQ ids
      // faqIds: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: 'FAQs',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      offerId: {  
        type: Sequelize.INTEGER,
        references: {
          model: 'Offers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      config: {
        type: Sequelize.JSONB
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