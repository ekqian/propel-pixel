import { useNavigate } from "react-router-dom";
import "./app.css";
import "../index.css";
import { Exercise } from "../components/types/exerciseType";
import { useState } from "react";
import axios from "axios";
import NavBar from "../components/navBar";
import ExerciseModal from "../components/exerciseModal";

function Home() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([] as Exercise[]);

  function saveWorkout(exe: Exercise) {
    setWorkouts((workouts) => [...workouts, exe]);
  }

  return (
    <>
      <NavBar />
      <h2>Welcome </h2>
      <div className="card">
        <div>
          <b>Date: </b>
          <input
            type="text"
            placeholder="i.e. 1/1/2024"
            value={date}
            onChange={(evt) => setDate(evt.target.value)}
          />
        </div>
        <ul>
          {workouts.map((exe) => (
            <li>
              <b>Exercise</b>: {exe.name}, <b>Time</b>: {exe.duration},{" "}
              <b>Sets</b>: {exe.setsReps[0]}, <b>Reps</b>: {exe.setsReps[1]}
            </li>
          ))}
        </ul>
        <ExerciseModal onSave={saveWorkout} />
        <button
          type="submit"
          onClick={() =>
            axios
              .put(
                "http://localhost:8000/api/workouts/add",
                {
                  workouts: { date: date, exercise: workouts },
                },
                { withCredentials: true }
              )
              .then(
                () => {
                  setDate("");
                  setWorkouts([]);
                },
                (error) => alert(error)
              )
          }
        >
          Save
        </button>
      </div>
      <button className="history" onClick={() => navigate("/history")}>
        History
      </button>
      <b
        className="logout-btn"
        onClick={() =>
          axios
            .post(
              "http://localhost:8000/user/logout",
              {},
              { withCredentials: true }
            )
            .then(
              () => navigate("/"),
              (error) => alert(error)
            )
        }
      >
        Log Out
      </b>
    </>
  );
}

export default Home;
