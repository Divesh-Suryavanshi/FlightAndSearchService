"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      });
    }
  }
  Flight.init(
    {
      flightNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      airplaneId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      arrivalAirportId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      departureAirportId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      arrivalTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      departureTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
