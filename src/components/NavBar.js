import { Navbar, Container } from "react-bootstrap";
import logo from "../imgs/logo4.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar-light">
        <Container className="container">
          <Navbar.Brand href="#">
            <img
              src={logo}
              className="d-inline-block align-top logo d-none d-lg-block"
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
