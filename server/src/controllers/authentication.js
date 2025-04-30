const { Router } = require("express");

const authenticationRouter = Router();

authenticationRouter.post("/login", (req, res) => {
  // TODO: add login logic
  res.json({ success: "true" });
});

authenticationRouter.post("/register", (req, res) => {
  // TODO: add register logic
  res.json({ success: "true" });
});

module.exports = authenticationRouter;
