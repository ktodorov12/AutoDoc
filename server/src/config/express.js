const express = require("express");
const cors = require("cors");

const allowedOrigins =
  process.env.NODE_ENV === "production" ? ["https://..."] : ["http://localhost:5173"];

function expressConfig(app) {
  app.use(express.json());
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );
}

module.exports = expressConfig;
