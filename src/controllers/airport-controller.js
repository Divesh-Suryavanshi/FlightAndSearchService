const { AirportService } = require("../services");
const service = new AirportService();
const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    return res.status(200).json({
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
};
