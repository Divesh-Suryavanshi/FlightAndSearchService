"use strict";

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

    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Airbus A380-800",
        capacity: 853,
      },
      {
        modelNumber: "Boeing 747-8",
        capacity: 581,
      },
      {
        modelNumber: "Boeing 777-300ER",
        capacity: 550,
      },
      {
        modelNumber: "Airbus A350-900",
        capacity: 410,
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
    await queryInterface.bulkDelete("Airplanes", null, {});
  },
};
