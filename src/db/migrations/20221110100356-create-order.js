"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      receiverPhone: {
        type: Sequelize.STRING,
      },
      receiverFullName: {
        type: Sequelize.STRING,
      },
      receiverAddress: {
        type: Sequelize.STRING,
      },
      receiverArea: {
        type: Sequelize.INTEGER,
      },
      packageMass: {
        type: Sequelize.INTEGER,
      },
      packageUnitMass: {
        type: Sequelize.STRING,
      },
      packageLong: {
        type: Sequelize.INTEGER,
      },
      packageWidth: {
        type: Sequelize.INTEGER,
      },
      packageHeight: {
        type: Sequelize.INTEGER,
      },
      packageCod: {
        type: Sequelize.INTEGER,
      },
      packageUnitCod: {
        type: Sequelize.STRING,
      },
      packagePrice: {
        type: Sequelize.INTEGER,
      },
      freight: {
        type: Sequelize.INTEGER,
      },
      noteTransport: {
        type: Sequelize.INTEGER,
      },
      noteCode: {
        type: Sequelize.STRING,
      },
      noteMsg: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
