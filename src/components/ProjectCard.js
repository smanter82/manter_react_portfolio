import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../styles/Portfolio.css";

function ProjectCard(props) {
  return (
    <Card className="my-5 mx-2" style={{ width: "48%" }}>
      <Card.Img variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
          <br></br>
          Technologies: {props.technologies}
        </Card.Text>
      </Card.Body>
      <Card.Body className="justify-content-center">
        <Button className="mr-2">
          <Card.Link
            className="grayText"
            target="blank"
            href={props.deployedLink}
          >
            Deployed App or Walkthrough Video
          </Card.Link>
        </Button>
        <Button className="ml-2">
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
  );
}

export default ProjectCard;
