const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("./config/env");
require ("./config/db");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  