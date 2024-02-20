import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";

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
      <Link to="/" className="btn btn-outline-primary mb-3">
        <FaArrowLeft /> Back
      </Link>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
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
          <div className="text-center">
            <Link to={`/workouts/edit/${id}`} className="btn btn-outline-warning me-2">
              <FaEdit /> Edit Workout
            </Link>
            <Link to={`/workouts/delete/${id}`} className="btn btn-outline-danger">
              <FaTrash /> Delete Workout
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default ShowWorkouts;
