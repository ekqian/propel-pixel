require("dotenv").config();
import mongoose from "mongoose";
import express from "express";
import cookieSession from "cookie-session";
import userRouter from "../routes/user";
import workoutRouter from "../routes/api";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import errorHandler from "../middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("Connected.");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "public",
    secret: "session",
    secure: false,
  })
);

app.use("/user", userRouter);
app.use("/api/workouts", workoutRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
