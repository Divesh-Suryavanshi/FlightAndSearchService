const { City } = require("../models/");

class CityRepository {
  async createCity({ name }) {
    try {
      await City.create({ name });
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity({ city_id }) {
    try {
      await City.destroy({
        where: {
          id: city_id,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
