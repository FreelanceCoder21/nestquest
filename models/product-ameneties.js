'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product - ameneties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product - ameneties.init({
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product-ameneties',
  });
  return product - ameneties;
};