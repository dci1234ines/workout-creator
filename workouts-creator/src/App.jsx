import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Abdomen from "./components/Abdomen";
import Glutes from "./components/Glutes";
import { WorkoutProvider } from "./context/WorkoutContext";

function App() {
  return (
    <WorkoutProvider>
      <Router>
        <Navbar />
        <div className="wrapper">
          <img src="/images/abdomen.jpeg" alt="abdomen.jpg" className="image" />
          <div className="container">
            <Routes>
              <Route path="/abdomen" element={<Abdomen />} />
              <Route path="/glutes" element={<Glutes />} />
            </Routes>
          </div>
          <img src="/images/glutes.jpeg" alt="glutes.jpg" className="image" />
        </div>
      </Router>
    </WorkoutProvider>
  );
}

export default App;