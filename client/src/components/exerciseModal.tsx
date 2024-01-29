import "../pages/app.css";
import { useState } from "react";
import { Exercise } from "./types/exerciseType";

type SaveProp = {
  onSave: (exe: Exercise) => void;
};

function ExerciseModal({ onSave }: SaveProp) {
  const [modalOn, setModal] = useState(false);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  return (
    <>
      <button className="add-btn" onClick={() => setModal(!modalOn)}>
        Add Exercise
      </button>
      {modalOn && (
        <div className="modal">
          <div onClick={() => setModal(!modalOn)} className="overlay"></div>
          <div className="modal-card">
            <b>Exercise Name</b>
            <div className="modal-input">
              <input
                type="text"
                placeholder="i.e. Bicep Curls"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
              />
            </div>
            <b>Duration (min)</b>
            <div className="modal-input">
              <input
                type="number"
                placeholder="i.e. 1/1/2024"
                value={duration}
                onChange={(evt) => setDuration(evt.target.valueAsNumber)}
              />
            </div>
            <b>Sets</b>
            <div className="modal-input">
              <input
                type="number"
                placeholder="i.e. 1/1/2024"
                value={sets}
                onChange={(evt) => setSets(evt.target.valueAsNumber)}
              />
            </div>
            <b>Reps</b>
            <div className="modal-input">
              <input
                type="number"
                placeholder="i.e. 1/1/2024"
                value={reps}
                onChange={(evt) => setReps(evt.target.valueAsNumber)}
              />
            </div>
            <button className="close" onClick={() => setModal(!modalOn)}>
              Close
            </button>
            <button
              onClick={() => {
                onSave({
                  name: name,
                  duration: duration,
                  setsReps: [sets, reps],
                });
                setModal(!modalOn);
                setName("");
                setDuration(0);
                setSets(0);
                setReps(0);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExerciseModal;
