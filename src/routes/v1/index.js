const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const file = fs.readFileSync("./swagger.yml", "utf8");
const swaggerDocument = YAML.parse(file);

const { CityController, AirportController } = require("../../controllers");

// swaggerDocs
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument));

// CityRoutes
router.post("/city", CityController.create);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);

// AirportRoutes
router.post("/airports", AirportController.create);
router.patch("/airports/:id", AirportController.update);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports/:id", AirportController.get);

module.exports = router;
