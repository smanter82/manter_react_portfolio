import React from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Resume from "../Sarah_Manter_Resume.pdf";
import backgroundImage from "../Images/tree_picture.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Row className="align-items-flex-end">
          <Card style={{ width: "75%" }}>
            <Card.Body>
              <Card.Title>
                <h1>Contact Me:</h1>
              </Card.Title>
              <Card.Text>
                <h2>Please contact me at any time. I'd love to chat!</h2>
                <p className="padText">Email: sarahmanter@gmail.com</p>
                <p className="padText">Phone: 603-496-4846</p>
              </Card.Text>
              <Button variant="success">
                <Card.Link
                  target="blank"
                  href="https://www.linkedin.com/in/sarah-manter-40881877/"
                >
                  Here is my LinkedIn Profile.
                </Card.Link>
              </Button>
              <Button variant="success">
                <Card.Link target="blank" href={Resume}>
                  My Resume
                </Card.Link>
              </Button>
              <Button variant="success">
                <Card.Link target="blank" href="https://github.com/smanter82/">
                  Here is my GitHub Repository.
                </Card.Link>
              </Button>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Your Name Here" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <Button variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
