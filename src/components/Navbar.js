import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";

export default function PortfolioNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand className="nameStyle" href="/">
          Sarah Manter
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="greenLinks" href="/">
            Home Page
          </Nav.Link>
          <Nav.Link className="greenLinks" href="Portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="greenLinks" href="Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
