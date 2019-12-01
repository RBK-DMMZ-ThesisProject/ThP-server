const express = require("express");
const request = require("supertest");
const app = express();

const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./routes"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
module.exports = app;
