import express from "express";
import checkLoggedIn from "../middleware/checkLoggedIn";
import User from "../models/userModel";
import asyncHandler from "../middleware/asyncHandler";

const router = express.Router();

router.post(
  "/signup",
  asyncHandler(async function (req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send("Error signing up user.");
    }
    const existUsername = await User.findOne({ username: username });
    if (existUsername) {
      res.status(400).send("Username is already taken.");
    }
    const user = new User({
      username: username,
      password: password,
      workouts: [],
    });
    await user.save();
    res.json(user);
  })
);

router.post(
  "/login",
  asyncHandler(async function (req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(400).send("User does not exist");
    } else {
      req.session!.username = username;
      res.sendStatus(200);
    }
  })
);

router.post(
  "/logout",
  checkLoggedIn,
  asyncHandler(async function (req, res, next) {
    req.session = null;
    res.sendStatus(200);
  })
);

export default router;
