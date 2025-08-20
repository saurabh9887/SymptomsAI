import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../Context/authContext";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Symptoms Analyser
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/symptoms-analysis">
              Analyse
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
              History
            </Nav.Link>
            {!user && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>

          {/* 🔽 Profile Dropdown without arrow */}
          <Dropdown align="end">
            <Dropdown.Toggle
              as="div" // custom toggle
              id="profile-dropdown"
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
            >
              <img
                width="40"
                height="40"
                src="/assets/img/profile-avatar.webp"
                alt="profile"
                style={{ borderRadius: "50%" }}
              />
              <span>{user?.name || "username"}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
