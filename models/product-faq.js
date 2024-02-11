'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product - FAQ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product - FAQ.init({
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product-FAQ',
  });
  return product - FAQ;
};