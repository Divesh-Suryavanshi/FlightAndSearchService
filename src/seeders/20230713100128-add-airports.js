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
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Indira Gandhi International Airport (DEL)",
        address: "Palam, Delhi 110037",
        cityId: 1,
      },
      {
        name: "Bengaluru International Airport (BLR)",
        address:
          "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560043",
        cityId: 2,
      },
      {
        name: "Chennai International Airport (MAA)",
        address: "Meenambakkam, Chennai, Tamil Nadu 600027",
        cityId: 3,
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
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
