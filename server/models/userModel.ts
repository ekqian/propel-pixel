import mongoose from "mongoose";

const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  duration: Number,
  setsReps: [Number, Number],
});

const workoutSchema = new Schema({
  date: String,
  exercise: [exerciseSchema],
});

const userSchema = new Schema({
  username: String,
  password: String,
  workouts: Array,
});

const User = model("User", userSchema);
export default User;
