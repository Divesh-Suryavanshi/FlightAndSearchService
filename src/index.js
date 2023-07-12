const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
};

setupAndStartServer();
