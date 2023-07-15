const { Op } = require("sequelize");

const CrudService = require("./crud-service");
const { CityRepository } = require("../repository/");

const repository = new CityRepository();

class CityService extends CrudService {
  createFilter(data) {
    let filter = {};

    if (data.name) {
      Object.assign(filter, {
        where: {
          name: {
            [Op.startsWith]: data.name,
          },
        },
      });
    }

    return filter;
  }

  constructor() {
    super(repository);
  }
}

module.exports = CityService;
