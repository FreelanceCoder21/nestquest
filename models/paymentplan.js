'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentPlan.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentPlan',
  });
  return PaymentPlan;
};