import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/workouts")
      .then((response) => {
        setWorkouts(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  const calculateTimeAgo = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const diffMs = currentTime - createdTime;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    } else if (diffWeeks > 0) {
      return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else if (diffMinutes > 0) {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    } else {
      return `${diffSeconds} second${diffSeconds > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <Container>
      <h1 className="text-center">Workouts</h1>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/workouts/create" className="btn btn-outline-dark">
          <FaPlus /> Create Workout
        </Link>
      </div>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {workouts.map((workout, index) => (
          <Col key={index}>
            <Link to={`/workouts/details/${workout._id}`} className="text-decoration-none">
              <Card className="shadow-sm bg-dark text-light">
                <Card.Body>
                  <Card.Title>{workout.title}</Card.Title>
                  <Card.Text>
                    Created {calculateTimeAgo(workout.createdAt)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
