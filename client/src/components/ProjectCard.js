import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./projectCard.css";
import { Row } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Card className="my-5 mx-2 projectCard">
      <Card.Img variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
          <br></br>
          Technologies: {props.technologies}
        </Card.Text>
      </Card.Body>
      <Card.Body className="portfolioBtns">
        <Row>
          <Button className="projectBtn mr-2">
            <Card.Link
              className="grayText"
              target="blank"
              href={props.deployedLink}
            >
              App/Walkthrough
            </Card.Link>
          </Button>
          <Button className="projectBtn ml-2">
            <Card.Link
              className="grayText"
              target="blank"
              href={props.gitHubLink}
            >
              GitHub Repository
            </Card.Link>
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
