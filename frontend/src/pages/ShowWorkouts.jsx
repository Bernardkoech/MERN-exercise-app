import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowWorkouts = () => {
  const [workouts, setWorkouts] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/workouts/${id}`)
      .then((response) => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Show Workout</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{workouts._id}</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>{workouts.title}</td>
            </tr>
            <tr>
              <td>Reps</td>
              <td>{workouts.reps}</td>
            </tr>
            <tr>
              <td>Load</td>
              <td>{workouts.load}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{formatTimestamp(workouts.createdAt)}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{formatTimestamp(workouts.updatedAt)}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ShowWorkouts;
