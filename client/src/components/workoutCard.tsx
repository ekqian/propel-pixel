import { useNavigate } from "react-router-dom";
import { Workout } from "./types/workoutType";
import axios from "axios";
import "../pages/app.css";

function WorkoutCard({ date, exercise }: Workout) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <h3 style={{ color: "purple", placeItems: "start" }}>{date}</h3>
        <ul>
          {exercise.map((exe) => (
            <li>
              <b>Exercise</b>: {exe.name}, <b>Time</b>: {exe.duration},{" "}
              <b>Sets</b>: {exe.setsReps[0]}, <b>Reps</b>: {exe.setsReps[1]}
            </li>
          ))}
        </ul>
        <b
          className="delete-btn"
          onClick={() =>
            axios
              .put(
                "http://localhost:8000/api/workouts/remove",
                {
                  date: date,
                },
                { withCredentials: true }
              )
              .then(
                () => navigate(0),
                (error) => alert(error)
              )
          }
        >
          x
        </b>
      </div>
    </>
  );
}

export default WorkoutCard;
