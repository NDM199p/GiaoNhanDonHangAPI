"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Orders", "priceService", {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addColumn("Orders", "paymentPriceServiceStatus", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });

    await queryInterface.addColumn("Orders", "paymentPriceService", {
      type: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Orders", "priceService");
    await queryInterface.removeColumn("Orders", "paymentPriceServiceStatus");
    await queryInterface.removeColumn("Orders", "paymentPriceService");
  },
};
