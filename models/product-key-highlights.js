'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product - key - highlights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product - key - highlights.init({
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product-key-highlights',
  });
  return product - key - highlights;
};