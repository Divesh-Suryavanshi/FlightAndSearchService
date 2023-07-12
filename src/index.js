const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server is running at port ${PORT}`);
    if (process.env.DB_SYNC == "true") {
      await db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
