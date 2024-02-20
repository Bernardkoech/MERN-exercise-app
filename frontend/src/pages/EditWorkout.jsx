import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditWorkout = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/workouts/${id}`)
      .then((response) => {
        const { title, reps, load } = response.data;
        setFormData({ title, reps, load });
      })
      .catch((err) => {
        console.error("Error fetching workout:", err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`/api/workouts/${id}`, formData)
      .then((response) => {
        console.log("Workout updated successfully:", response.data);
        setShowAlert(true); // Show the alert
      })
      .catch((err) => {
        console.error("Error updating workout:", err);
      });
  };



  return (
    <Container>
      <h1 className="text-center mt-4">Edit Workout</h1>
      <Link to="/" className="btn btn-outline-primary mb-3">
        <FaArrowLeft /> Back
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type="text"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="load">
          <Form.Label>Load</Form.Label>
          <Form.Control
            type="text"
            name="load"
            value={formData.load}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Update Workout
        </Button>
        {/* Display alert when workout is updated successfully */}
        {showAlert && (
          <Alert variant="success" className="mt-3">
            Workout updated successfully!
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default EditWorkout;
