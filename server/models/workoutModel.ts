import mongoose from "mongoose";

const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  duration: Number,
  setsReps: [Number, Number],
});

const workoutSchema = new Schema({
  date: { type: String, required: true },
  exercise: [exerciseSchema],
  username: String,
});

const Workout = model("Workout", workoutSchema);
export default Workout;
