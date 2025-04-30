const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    // TODO: add error handlig logic
    console.log(error);
  }
})();
