'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LevelArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LevelArea.init({
    name: DataTypes.STRING,
    descri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LevelArea',
  });
  return LevelArea;
};