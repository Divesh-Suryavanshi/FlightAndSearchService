const { Op } = require("sequelize");

const CrudService = require("./crud-service");
const { AirplaneRepository } = require("../repository");

const repository = new AirplaneRepository();

class AirplaneService extends CrudService {
  createFilter(data) {
    let filter = {};

    if (data.modelNumber) {
      Object.assign(filter, {
        name: {
          [Op.startsWith]: data.modelNumber,
        },
      });
    }

    if (data.capacity) {
      Object.assign(filter, {
        capacity: {
          [Op.eq]: data.capacity,
        },
      });
    }
    console.log(filter);
    return filter;
  }

  constructor() {
    super(repository);
  }
}

module.exports = AirplaneService;
