class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
      const response = await this.repository.destroy(modelId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.repository.update(modelId, data);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async get(modelId) {
    try {
      const response = await this.repository.get(modelId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getAll(data) {
    try {
      const filter = this.createFilter(data);
      const response = await this.repository.getAll(filter);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = CrudService;
