const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const allProducts = require("./data.js");

app.get("/api/products", (req, res) => {
  res.send(allProducts);
});

const Port = 5000;

app.listen(Port, () => {
  console.log("serve at localhost " + Port);
});
