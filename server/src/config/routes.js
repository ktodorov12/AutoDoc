const authenticationRouter = require("../controllers/authentication");

function routeConfig(app) {
  app.use(authenticationRouter);
}

module.exports = routeConfig;
