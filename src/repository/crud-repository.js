class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const model = await model.findByPk(modelId);
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
      await model.destroy({
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
      const response = await model.findByPk(modelId);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
