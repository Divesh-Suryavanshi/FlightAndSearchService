const { FlightService } = require("../services");
const service = new FlightService();

const create = async (req, res) => {
  try {
    const city = await service.create(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create a flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await service.update(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await service.get(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const city = await service.getAll(req.query);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create a flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  get,
  getAll,
};
