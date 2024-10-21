const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/person", require("./route/personRoute"));

app.listen(8080, () => {
  console.log("server start!");
});
