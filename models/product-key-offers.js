'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product - key - offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product - key - offers.init({
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product-key-offers',
  });
  return product - key - offers;
};