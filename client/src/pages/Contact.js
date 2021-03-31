import { useState } from "react";
import { Form, Card, Button, Row, Modal } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "../Images/Sarah_Manter_Resume.pdf";
import { Redirect } from "react-router";

export default function Contact() {
  const [refresh, setRefresh] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const onModalClose = () => {
    handleClose();
    setRefresh(<Redirect to={`/`} />);
  };
  const [messages, setMessages] = useState({
    contact_name: "",
    email: "",
    message: "",
  });

  const setMessageState = (event) => {
    const { name, value } = event.target;
    setMessages({
      ...messages,
      [name]: value,
    });
  };
  const handleMessageSubmit = (event) => {
    console.log("button clicked");
    event.preventDefault();
    fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messages),
    })
      .then((response) => response.json())
      .then(() => {
        setShow(true);
      })
      .catch((error) => {
        alert("Error: Something went wrong.  Please try again.");
      });
  };

  return (
    <>
      <div className="contactPage">
        <Navbar></Navbar>
        <Row>
          <Card className="mx-auto my-2 " style={{ width: "90%" }}>
            <Card.Body className="grayCard d-flex justify-content-center">
              <Card.Title>
                <h1>Contact Me:</h1>
              </Card.Title>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Card.Text>
                <h2 className="mb-3 text-center">
                  Please contact me at any time. I'd love to chat!
                </h2>
                <Row className="d-flex justify-content-center">
                  <p className="padText">Email: sarahmanter@gmail.com</p>
                  <p className="padText">Phone: 603-496-4846</p>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Body className="contactBtns d-flex justify-content-center">
              <Button className="btn mx-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href="https://www.linkedin.com/in/sarahmanter/"
                >
                  LinkedIn Profile.
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
                  GitHub Repository.
                </Card.Link>
              </Button>
            </Card.Body>
            <Card.Body>
              <Form onSubmit={handleMessageSubmit}>
                <Form.Group controlId="contactName">
                  <Form.Label className="orangeText">Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your Name Here"
                    onChange={(event) => setMessageState(event)}
                    name="contact_name"
                    value={messages.contact_name}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="orangeText">Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    onChange={(event) => setMessageState(event)}
                    name="email"
                    value={messages.email}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="orangeText">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Please type a short message here."
                    onChange={(event) => setMessageState(event)}
                    name="message"
                    value={messages.message}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Message sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for contacting me. I'll be in touch soon.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onModalClose}>Close</Button>
          {refresh ? refresh : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}
