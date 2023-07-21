const { Flight } = require("../models");
const { CrudRepository } = require("./index");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
}

module.exports = FlightRepository;
