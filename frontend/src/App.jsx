import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import "./App.css";
import CreateWorkout from "./pages/CreateWorkout";
import ShowWorkouts from "./pages/ShowWorkouts";
import EditWorkouts from "./pages/EditWorkout";
import DeleteWorkout from "./pages/DeleteWorkout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app bg-light">
      <Navbar />
      <br />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts/create" element={<CreateWorkout />} />
          <Route path="/workouts/details/:id" element={<ShowWorkouts />} />
          <Route path="/workouts/edit/:id" element={<EditWorkouts />} />
          <Route path="/workouts/delete/:id" element={<DeleteWorkout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
