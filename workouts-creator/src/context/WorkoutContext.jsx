import { createContext, useState } from "react";

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState({
    abdomen: [
      { name: "Plank", description: "Halte den Körper in einer geraden Linie.", videoUrl: "https://www.youtube.com/watch?v=pvIjsG5Svck" },
      { name: "Crunches", description: "Lege dich auf den Rücken und hebe den Oberkörper an.", videoUrl: "https://www.youtube.com/watch?v=0t4t3IpiEao" },
      { name: "Russian Twists",description:  "Drehe den Oberkörper von einer Seite zur anderen.", videoUrl: "https://www.youtube.com/watch?v=VfWoNC-NMII" },
      { name: "Leg Raises", description:  "Hebe die Beine im Liegen an." , videoUrl: "https://www.youtube.com/watch?v=Wp4BlxcFTkE"},
    ],
    glutes: [
      { name: "Squats", description: "Beuge die Knie und senke den Körper ab.", videoUrl: "https://www.youtube.com/watch?v=xqvCmoLULNY"},
      { name: "Lunges", description: "Mach einen großen Schritt nach vorne und senke das hintere Knie ab.", videoUrl: "https://www.youtube.com/watch?v=g8-Ge9S0aUw"},
      { name: "Glute Bridges", description: "Lege dich auf den Rücken und hebe die Hüften an.",  videoUrl: "https://www.youtube.com/watch?v=gLI1VHIosUY"},
      { name: "Donkey Kicks", description: "Beuge dich auf alle Viere und hebe ein Bein nach hinten an.", videoUrl: "https://www.youtube.com/watch?v=SJ1Xuz9D-ZQ"},
    ]
  });

  const addWorkout = (muscle, workoutName) => {
    if (workoutName.trim() === "") return; 
    const newWorkout = { name: workoutName, description: "Versuch's doch mal mit Google oder Youtube!" }; 
    
    setWorkouts((prevWorkouts) => ({
      ...prevWorkouts,
      [muscle]: [...prevWorkouts[muscle], newWorkout]
    }));
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};