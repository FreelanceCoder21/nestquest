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
        type: Sequelize.STRING,
        allowNull:false
      },
      towerName:{
        type:Sequelize.STRING,
        allowNull:false
      },
      description:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      noOfFloors:{
        type:Sequelize.STRING,
        allowNull:false
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
      ratings:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      soldOut:{
        type:Sequelize.BOOLEAN,
        allowNull:false
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
      // amenitiesIds:{
      //   type:Sequelize.ARRAY(Sequelize.INTEGER),
      //   allowNull:false,
      //   references:{
      //     model:'Amenities',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      paymentPlanId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'PaymentPlans',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      reraNo:{
        type:Sequelize.STRING,
        allowNull:false
      },
      // offDaysIds:{
      //   type:Sequelize.ARRAY(Sequelize.INTEGER),
      //   allowNull:false,
      //   references:{
      //     model:'Offdays',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      // flatIds:{
      //   type:Sequelize.ARRAY(Sequelize.INTEGER),
      //   allowNull:false,
      //   references:{
      //     model:'Flats',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      // slotIds:{
      //   type:Sequelize.ARRAY(Sequelize.INTEGER),
      //   allowNull:false,
      //   references:{
      //     model:'Slots',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      // faqIds:{
      //   type:Sequelize.ARRAY(Sequelize.INTEGER),
      //   allowNull:false,
      //   references:{
      //     model:'FAQs',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      possessionDate:{
        type:Sequelize.DATE,
        allowNull:false
      },
      tagInPeriod:{
        type:Sequelize.DATE,
        allowNull:true
      },
      // keyHighLightIds:{
      //   type:Sequelize.ARRAY(Sequelize.STRING),
      //   allowNull:false,
      //   references:{
      //     model:'KeyHighlights',
      //     key:"id"
      //   },
      //   onDelete:"CASCADE",
      //   onUpdate:"CASCADE"
      // },
      //images model
      //doubt
      geoLocation:{
        type:Sequelize.STRING,
        allowNull:false
      },
      offerIds:{
        type:Sequelize.ARRAY(Sequelize.STRING),
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
    await queryInterface.dropTable('Products');
  }
};