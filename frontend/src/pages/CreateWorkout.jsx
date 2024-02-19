import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const CreateWorkouts = () => {
  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: ""
  });

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
      .post("/api/workouts", formData)
      .then((response) => {
        console.log("Workout created successfully:", response.data);
        // Optionally, you can redirect the user or perform any other action upon successful creation
      })
      setFormData("")
      .catch((err) => {
        console.error("Error creating workout:", err);
      });
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Create Workout</h1>
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
        <Button variant="dark" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateWorkouts;
