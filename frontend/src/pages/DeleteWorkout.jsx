import { useState } from "react";
import axios from "axios";
import { Container, Button, Modal, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DeleteWorkout = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const deleteWorkout = async () => {
    try {
      // Send a DELETE request to the backend to delete the workout
      const response = await axios.delete(`/api/workouts/${id}`);
      console.log("Workout deleted successfully:", response.data);
      setShowAlert(true); // Show the alert
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const handleDeleteConfirmed = async () => {
    setShowModal(false); // Close the confirmation modal
    await deleteWorkout(); // Delete the workout
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Delete Workout</h1>
      {/* Display alert when workout is deleted successfully */}
      {showAlert && (
        <Alert variant="success" className="mt-3">
          Workout deleted successfully!
        </Alert>
      )}
      <div className="text-center mt-3">
        <Button variant="danger" onClick={() => setShowModal(true)}>
          Delete Workout
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this workout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmed}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DeleteWorkout;
