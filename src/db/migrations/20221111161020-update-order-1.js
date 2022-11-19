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
    await queryInterface.addColumn("Orders", "isCancel", {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });

    await queryInterface.addColumn("Orders", "cancelOn", {
      type: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Orders", "isCancel");
    await queryInterface.removeColumn("Orders", "cancelOn");
  },
};
