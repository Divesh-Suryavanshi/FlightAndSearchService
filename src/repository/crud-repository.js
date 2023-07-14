class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const model = model.findByPk(modelId);
      model.update(data);
      await model.save();
      return model;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async delete(modelId) {
    try {
      const response = model.destroy(modelId);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const response = model.findByPk(modelId);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
