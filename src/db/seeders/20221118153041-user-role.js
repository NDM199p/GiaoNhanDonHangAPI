"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // role root
    await queryInterface.bulkInsert("User", [
      {
        firstName: "root",
        lastName: "root",
        email: "root",
        username: "root",
        password: "root",
        role: 0,
      },
    ]);

    // role admin
    await queryInterface.bulkInsert("User", [
      {
        firstName: "admin01",
        lastName: "admin01",
        email: "admin01",
        username: "admin01",
        password: "admin01",
        role: 1,
      },
      {
        firstName: "admin02",
        lastName: "admin02",
        email: "admin02",
        username: "admin02",
        password: "admin02",
        role: 1,
      },
    ]);
    // role customer
    await queryInterface.bulkInsert("User", [
      {
        firstName: "customer01",
        lastName: "customer01",
        email: "customer01",
        username: "customer01",
        password: "customer01",
        role: 2,
        area: 1,
      },
      {
        firstName: "customer02",
        lastName: "customer02",
        email: "customer02",
        username: "customer02",
        password: "customer02",
        role: 2,
        area: 1,
      },
    ]);

    // role shipper
    await queryInterface.bulkInsert("User", [
      {
        firstName: "shipper01",
        lastName: "shipper01",
        email: "shipper01",
        username: "shipper01",
        password: "shipper01",
        role: 3,
        area: 1,
      },
      {
        firstName: "shipper02",
        lastName: "shipper02",
        email: "shipper02",
        username: "shipper02",
        password: "shipper02",
        role: 3,
        area: 1,
      },
    ]);

    // role manage-area
    await queryInterface.bulkInsert("User", [
      {
        firstName: "manager01",
        lastName: "manager01",
        email: "manager01",
        username: "manager01",
        password: "manager01",
        role: 4,
        area: 1,
      },
      {
        firstName: "manager02",
        lastName: "manager02",
        email: "manager02",
        username: "manager02",
        password: "manager02",
        role: 4,
        area: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
