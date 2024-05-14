'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auths extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auths.init({
    username: DataTypes.STRING,
    access_token: DataTypes.STRING,
    expire_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Auths',
  });
  return Auths;
};