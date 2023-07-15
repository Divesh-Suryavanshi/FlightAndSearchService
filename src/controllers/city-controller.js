const { CityService } = require("../services");

const service = new CityService();

// create -> post -> req.body
const create = async (req, res) => {
  try {
    const city = await service.create(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

//update -> patch -> req.body -> req.params.id
const update = async (req, res) => {
  try {
    const city = await service.update(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

// destroy -> get request -> req.params.id
const destroy = async (req, res) => {
  try {
    const city = await service.destroy(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

//   get -> get request -> req.params.id
const get = async (req, res) => {
  try {
    const city = await service.get(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a city",
      err: error,
    });
  }
};

//get request ->
const getAll = async (req, res) => {
  try {
    const city = await service.getAll(req.query);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
  getAll,
};
