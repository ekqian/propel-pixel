import express, { Request } from "express";
import checkLoggedIn from "../middleware/checkLoggedIn";
import User from "../models/userModel";
import asyncHandler from "../middleware/asyncHandler";

const router = express.Router();

router.get(
  "/",
  checkLoggedIn,
  asyncHandler(async function (req, res, next) {
    const username = req.session!.username;
    const user = await User.findOne({ username: username });
    res.json(user!.workouts);
  })
);

router.put(
  "/add",
  checkLoggedIn,
  asyncHandler(async function (req, res, next) {
    const username = req.session!.username;
    const user = await User.findOne({ username: username });
    const { workouts } = req.body;
    user!.workouts.push(workouts);
    await user?.save();
    res.json(user);
  })
);

router.put(
  "/remove",
  checkLoggedIn,
  asyncHandler(async function (req, res, next) {
    const username = req.session!.username;
    let user = await User.findOne({ username: username });
    const { date, exercise } = req.body;
    const filtered = user!.workouts.filter((workout) => {
      return workout.date !== date;
    });
    user!.workouts = filtered;
    await user?.save();
    res.json(user);
  })
);

export default router;
