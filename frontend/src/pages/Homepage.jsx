import { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

const Homepage = () => {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = async () => {
    const response = await axios.get("http://localhost:5555/api/workouts");
    setWorkouts(response.data.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="bg-light">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
