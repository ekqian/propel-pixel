import axios from "axios";
import { useEffect, useState } from "react";
import { Workout } from "../components/types/workoutType";
import "./app.css";
import "../index.css";
import WorkoutCard from "../components/workoutCard";
import NavBar from "../components/navBar";

function History() {
  const [workouts, setWorkouts] = useState([] as Workout[]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8000/api/workouts", { withCredentials: true })
        .then((response) => setWorkouts(response.data));
    };
    fetchData();
    const intervalID = setInterval(() => {
      fetchData;
    }, 2000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <NavBar />
      <div className="home">
        {workouts.map((workout) => (
          <WorkoutCard date={workout.date} exercise={workout.exercise} />
        ))}
      </div>
    </>
  );
}

export default History;
