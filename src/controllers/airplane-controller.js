const { AirplaneService } = require("../services");
const service = new AirplaneService();

const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create an airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await service.update(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated an existing airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update an existing airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await service.destroy(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted an existing airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to delete an airport with provided id",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await service.get(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched an existing airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to find an airport with provided id",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await service.getAll(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetched all of the required airports",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to fetch airports",
      err: {},
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
