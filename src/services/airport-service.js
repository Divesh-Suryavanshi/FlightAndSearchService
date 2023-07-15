const CrudService = require("./crud-service");
const { AirportRepository } = require("../repository");

const repository = new AirportRepository();

class AirportService extends CrudService {
  constructor() {
    super(repository);
  }
}

module.exports = AirportService;
