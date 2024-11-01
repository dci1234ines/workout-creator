import React, { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import Timer from "./Timer"; 

const Glutes = () => {
  const { workouts, addWorkout } = useContext(WorkoutContext);
  const [newWorkout, setNewWorkout] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleAddWorkout = () => {
    if (newWorkout.trim() !== "") {
     
      addWorkout("glutes", newWorkout);
      setNewWorkout(""); 
    } 
  };

  const handleWorkoutClick = (workout) => {
   
    setSelectedWorkout(selectedWorkout === workout ? null : workout);
  };

  return (
    <div>
      <h2>Glutes Workouts</h2>
      <ul>
        {workouts.glutes.map((workout) => (
          <li key={workout.name} onClick={() => handleWorkoutClick(workout)}>
            {workout.name}
          </li>
        ))}
      </ul>
      {selectedWorkout && (
        <div>
          <h3>Beschreibung:</h3>
          <p>{selectedWorkout.description}</p>
          {selectedWorkout.videoUrl ? (
      <div>
        <div className="video-container">
        <iframe
          src={selectedWorkout.videoUrl.replace("watch?v=", "embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
         </div>
      </div>
    ) : (
      <p>Kein Video verfügbar</p> // 
    )}
          <Timer />
        </div>
      )}
      <input
        type="text"
        value={newWorkout}
        onChange={(e) => setNewWorkout(e.target.value)}
        placeholder="Put in a new workout"
      />
      <button onClick={handleAddWorkout}>Put in</button>
    </div>
  );
};

export default Glutes;
