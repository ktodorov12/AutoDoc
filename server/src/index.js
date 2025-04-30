const express = require("express");

const expressConfig = require("./config/express");
const routeConfig = require("./config/routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    expressConfig(app);
    routeConfig(app);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    // TODO: add error handlig logic
    console.log(error);
  }
})();
