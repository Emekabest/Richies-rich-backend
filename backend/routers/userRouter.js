const express = require("express");
const User = require("../models/userModels.js");
const ExpressAsyncHandler = require("express-async-handler");
const { generateToken, isAuth } = require("../util.js");
const { update } = require("../models/userModels.js");

const userRouter = express.Router();

userRouter.get(
  "/createAdmin",
  ExpressAsyncHandler(async (req, res) => {
    try {
      const user = new User({
        name: "admin",
        email: "admin@Example.com",
        password: "RichiesRich",
        isAdmin: true,
      });

      const createdUser = await user.save();

      res.send(createdUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
);

userRouter.post(
  "/login",
  ExpressAsyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!signinUser) {
      res.status(401).send({
        message: "Invalid email or password",
      });
    } else {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        password: signinUser.password,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
    }
  })
);

userRouter.post(
  "/register",
  ExpressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    });

    const createUser = await user.save();

    if (!createUser) {
      res.status(401).send({
        message: "Invalid User Data",
      });
    } else {
      res.send({
        _id: createUser.id,
        name: createUser.name,
        email: createUser.email,
        password: createUser.password,
        isAdmin: createUser.isAdmin,
        token: generateToken(createUser),
      });
    }
  })
);

userRouter.put(
  "/:id",
  isAuth,
  ExpressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    // const createUser = await user.save();

    if (!user) {
      res.status(404).send({
        message: "User Not Found",
      });
    } else {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

module.exports = userRouter;
