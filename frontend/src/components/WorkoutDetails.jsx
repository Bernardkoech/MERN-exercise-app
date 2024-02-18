import { Row, Col, Card, ListGroup } from "react-bootstrap";

const WorkoutDetails = ({ workout }) => {
  return (
    <Row>
      <Col md={6} >
        <Card className="workout-details bg-light border-0 ">
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 shadow-sm">
                <Card.Title className="text-info">{workout.title}</Card.Title>
                <strong>Load(kg):</strong> {workout.load}
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <strong>Reps:</strong> {workout.reps}
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <strong>Created At:</strong> {workout.createdAt}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

      </Col>
    </Row>

  );
};

export default WorkoutDetails;
