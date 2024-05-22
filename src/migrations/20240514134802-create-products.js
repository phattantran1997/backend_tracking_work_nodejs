'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      JobNo: {
        type: Sequelize.STRING
      },
      Notes: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING
      },
      Area: {
        type: Sequelize.FLOAT
      },
      WidthDim: {
        type: Sequelize.FLOAT
      },
      DepthDim: {
        type: Sequelize.FLOAT
      },
      LengthDim: {
        type: Sequelize.FLOAT
      },
      Weight: {
        type: Sequelize.FLOAT
      },
      QRCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};