import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";

export default function PortfolioNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="nameStyle px-4" href="/">
          Sarah Manter
        </Navbar.Brand>
        <Navbar.Toggle id="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto px-4">
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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
