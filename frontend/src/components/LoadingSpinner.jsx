import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status" className="text-info">💩</Spinner>
    </div>
  );
};

export default LoadingSpinner;
