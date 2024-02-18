import  { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

import { Row, Col } from "react-bootstrap";

const Homepage = () => {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = async () => {
    const response = await axios.get("http://localhost:5555/api/workouts");
    setWorkouts(response.data.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="bg-light">
      <Row>
        <Col md={8}>
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
              ))}
          </div>
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
