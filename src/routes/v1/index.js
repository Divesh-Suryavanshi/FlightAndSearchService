const router = require("express").Router();

const { CityController } = require("../../controllers");

router.post("/city", CityController.create);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);

module.exports = router;
