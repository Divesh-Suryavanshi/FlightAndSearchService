"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      airplaneId: {
        allowNull: false,
        references: {
          model: "Airplanes",
          key: "id",
          as: "airplaneId",
        },
        type: Sequelize.INTEGER,
      },
      arrivalAirportId: {
        allowNull: false,
        references: {
          model: "Airports",
          key: "id",
          as: "arrivalAirportId",
        },
        type: Sequelize.INTEGER,
      },
      departureAirportId: {
        allowNull: false,
        references: {
          model: "Airports",
          key: "id",
          as: "departureAirportId",
        },
        type: Sequelize.INTEGER,
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      boardingGate: {
        type: Sequelize.STRING,
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
