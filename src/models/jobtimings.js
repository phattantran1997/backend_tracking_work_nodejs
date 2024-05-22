'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobTimings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobTimings.init({
    ProductID: DataTypes.INTEGER,
    JobNo: DataTypes.STRING,
    OperatorID: DataTypes.STRING,
    JobTime: DataTypes.STRING,
    JobDay: DataTypes.STRING,
    Duration: DataTypes.STRING,
    Status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobTimings',
  });
  return JobTimings;
};