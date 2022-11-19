"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Orders", "senderArea", { type: Sequelize.DataTypes.INTEGER });
    await queryInterface.addColumn("Orders", "senderTransitAgent", {
      type: Sequelize.DataTypes.INTEGER,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "senderArea");
    await queryInterface.removeColumn("Orders", "senderTransitAgent");
  },
};
