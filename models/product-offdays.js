'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product - offDays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product - offDays.init({
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product-offDays',
  });
  return product - offDays;
};