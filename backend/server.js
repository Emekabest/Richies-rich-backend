const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config.js");
const allProducts = require("./data.js");
const userRouter = require("./routers/userRouter.js");
const bodyParser = require("body-parser");

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRouter);

app.get("/api/products", (req, res) => {
  res.send(allProducts);
});

const Port = process.env.PORT || 5000;

app.use((err, req, res, next) => {
  const status = err.name && err.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err.message });
});

app.listen(Port, () => {
  console.log("serve at localhost " + Port);
});
