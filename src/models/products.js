'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    Name: DataTypes.STRING,
    JobNo: DataTypes.STRING,
    Notes: DataTypes.STRING,
    Type: DataTypes.INTEGER,
    Description: DataTypes.STRING,
    Area: DataTypes.FLOAT,
    WidthDim: DataTypes.FLOAT,
    DepthDim: DataTypes.FLOAT,
    LengthDim: DataTypes.FLOAT,
    Weight: DataTypes.FLOAT,
    QRCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};