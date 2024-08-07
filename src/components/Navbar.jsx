import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUser } from '../../context/userContext';

export default function AppNavbar() {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">OverMeli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/likes">Likes</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="User Actions" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              {user && user.role === 'admin' && (
                <NavDropdown.Item as={Link} to="/delete">Delete</NavDropdown.Item>
              )}
              {user && (
                <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>Logout</NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              {user && user.role === 'admin' && (
                <NavDropdown.Item as={Link} to="/likesAVG">Average Likes</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
