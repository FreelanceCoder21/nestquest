'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EOI - forms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EOI - forms.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EOI-forms',
  });
  return EOI - forms;
};