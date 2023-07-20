const { Op } = require("sequelize");

const CrudService = require("./crud-service");
const { AirportRepository } = require("../repository");

const repository = new AirportRepository();

class AirportService extends CrudService {
  createFilter(data) {
    let filter = {};

    if (data.name) {
      Object.assign(filter, {
        name: {
          [Op.startsWith]: data.name,
        },
      });
    }

    if (data.cityId) {
      Object.assign(filter, {
        cityId: {
          [Op.eq]: data.cityId,
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

module.exports = AirportService;
