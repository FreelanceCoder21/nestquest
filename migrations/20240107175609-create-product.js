'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regions',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      configurationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Configurations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      price: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      balcony: {
        type: Sequelize.BOOLEAN
      },
      // amenitiesIds: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: 'Amenities',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      // images: {
      //   type: Sequelize.ARRAY(Sequelize.STRING)
      // },
      // offerIds: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: 'Offers',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      possessionDate: {
        type: Sequelize.DATE
      },
      //rera no should be unique
      reraNo: {
        unique: true,
        type: Sequelize.STRING
      },
      amenitiesFloorPlan: {
        type: Sequelize.STRING//Sequelize.ARRAY(Sequelize.STRING)
      },
      masterProjectPlan: {
        type: Sequelize.STRING//Sequelize.ARRAY(Sequelize.STRING)
      },
      floorLayOut: {
        type: Sequelize.STRING
      },  
      appartmentLayOut: {
        type: Sequelize.STRING  
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
      geoLocation: {
        type: Sequelize.STRING
      },
      tagInPeriod: {
        type: Sequelize.STRING
      },
      // slotsIds: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: 'Slots',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      offDays: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      //no of floors or floor column doubt
      heyHighlight: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};