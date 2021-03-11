import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectCard(props) {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center align-items-stretch">
          <Card className=" ml-auto mr-5 my-5" style={{ width: "75%" }}>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.body}
                <br></br>
                Technologies: {props.technologies}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Button className="mr-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href={props.deployedLink}
                >
                  Deployed App or Walkthrough Video
                </Card.Link>
              </Button>
              <Button className="ml-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href={props.gitHubLink}
                >
                  GitHub Repository
                </Card.Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" ml-auto mr-5 my-5" style={{ width: "75%" }}>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.body}
                <br></br>
                Technologies: {props.technologies}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Button className="mr-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href={props.deployedLink}
                >
                  Deployed App
                </Card.Link>
              </Button>
              <Button className="ml-5">
                <Card.Link
                  className="grayText"
                  target="blank"
                  href={props.gitHubLink}
                >
                  GitHub Repository
                </Card.Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProjectCard;
