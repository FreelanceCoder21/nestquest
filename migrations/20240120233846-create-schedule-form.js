'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScheduleForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scheduleId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'Schedules',
          key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      isSkipped: {
        type:Sequelize.BOOLEAN,
        allowNull:false
      },
      ratings: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      feedBackIds: {
        type:Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull:false,
        references: {
          model:'Feedbacks',
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
    await queryInterface.dropTable('ScheduleForms');
  }
};