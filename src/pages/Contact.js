import React from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";
import backgroundImage from "../Images/tree_picture.png";
import Resume from "../Images/Sarah_Manter_Resume.pdf";

//Add functionality of Contact form with MongoDB stitch Webhooks??

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="contactPage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Row>
          <Card className="mx-auto my-2 " style={{ width: "90%" }}>
            <Card.Body className="grayCard d-flex justify-content-center">
              <Card.Title>
                <h1>Contact Me:</h1>
              </Card.Title>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Card.Text>
                <h2 className="mb-3">
                  Please contact me at any time. I'd love to chat!
                </h2>
                <Row className="d-flex justify-content-center">
                  <p className="padText">Email: sarahmanter@gmail.com</p>
                  <p className="padText">Phone: 603-496-4846</p>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Button className="btn mx-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href="https://www.linkedin.com/in/sarah-manter-40881877/"
                >
                  Here is my LinkedIn Profile.
                </Card.Link>
              </Button>
              <Button className="btn mx-5">
                <Card.Link className="grayText" target="blank" href={Resume}>
                  My Resume
                </Card.Link>
              </Button>
              <Button className="btn mx-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href="https://github.com/smanter82/"
                >
                  Here is my GitHub Repository.
                </Card.Link>
              </Button>
            </Card.Body>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="orangeText">Name</Form.Label>
                  <Form.Control type="name" placeholder="Your Name Here" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="orangeText">Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="orangeText">Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <Button variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
}
