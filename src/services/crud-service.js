class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const city = await this.repository.create(data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async destroy(cityId) {
    try {
      const response = await this.repository.destroy(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async update(cityId, data) {
    try {
      const city = await this.repository.update(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async get(cityId) {
    try {
      const city = await this.repository.get(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}
