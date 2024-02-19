import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import Bootstrap components
import LoadingSpinner from "../components/LoadingSpinner";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/workouts")
      .then((response) => {
        setWorkouts(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
    <h1 className="text-center">Workouts</h1>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/workouts/create" className="btn btn-outline-dark">
                    <FaPlus /> Create Workout
                </Link>
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {workouts.map((workout, index) => (
                        <Col key={index}>
                            <Link to={`/workouts/details/${workout._id}`} className="text-decoration-none">
                                <Card className="shadow-sm bg-dark text-light">
                                    <Card.Body>
                                        <Card.Title>{workout.title}</Card.Title>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
  );
};

export default Home;
