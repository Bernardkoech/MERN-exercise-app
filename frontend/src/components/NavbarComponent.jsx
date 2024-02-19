import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary shadow-sm">
      <Container>
        <Link to="/" className="nav-link">
          <Navbar.Brand ><b>Workout Buddy</b></Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
