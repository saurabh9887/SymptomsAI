import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../Context/authContext";

const NavbarComponent = () => {
  const { user } = useAuth();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Symptoms Checker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Analyse</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
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
              <span>{user.name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
