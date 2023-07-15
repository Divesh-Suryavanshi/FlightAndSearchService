class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const model = await this.model.findByPk(modelId);
      await model.update(data);
      return model;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const response = await this.model.findByPk(modelId);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
