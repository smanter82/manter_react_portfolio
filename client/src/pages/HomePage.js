import React from "react";
import "../styles/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";
import { Animated } from "react-animated-css";
import backgroundImage from "../Images/tree_picture.png";
import profilePic from "../Images/profile_pic.jpg";
import familyPic from "../Images/kids_on_bridge.jpg";
// import IconHtml5 from "react-devicon/html5/plain";

//Add technologies icons to be employer-competitive

export default function HomePage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Navbar className="homeNav"></Navbar>
        <Row className="d-flex justify-content-center">
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Card className="mx-5 my-5" style={{ width: "30rem" }}>
              <Card.Img variant="top" src={profilePic} />
              <Card.Body>
                <Card.Title>About Me:</Card.Title>
                <Card.Text>
                  Hello! I graduated from the University of New Hampshire with a
                  Masters of Arts in Teaching Secondary English. I spent 13
                  years teaching middle school Language Arts, but now it is time
                  for a change. I have always enjoyed working with computers. I
                  am taking a coding course through UNH, and now I look forward
                  to using that passion in the world of Web Design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Animated>
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Card className="mx-5 my-5" style={{ width: "30rem" }}>
              <Card.Img variant="top" src={familyPic} />
              <Card.Body>
                <Card.Title>My family</Card.Title>
                <Card.Text>
                  I am the mother of amazing twins. While they take up a lot of
                  time and energy, they have been super supportive of my quest
                  to dive into Web Development. They stay out of my hair as much
                  as they can while I'm doing homework, and my daughter even
                  practices learning to code on her own computer next to me
                  while I study.
                </Card.Text>
              </Card.Body>
            </Card>
          </Animated>
        </Row>
        <div className="footer-background py-3 d-flex justify-content-center">
          <i class="devicon-html5-plain-wordmark colored mx-2"></i>
          <i class="devicon-css3-plain-wordmark colored mx-2"></i>
          <i class="devicon-javascript-plain colored mx-2"></i>
          <i class="devicon-express-original-wordmark colored mx-2"></i>
          <i class="devicon-git-plain-wordmark colored mx-2"></i>
          <i class="devicon-github-original-wordmark colored mx-2"></i>
          <i class="devicon-heroku-plain-wordmark colored mx-2"></i>
          <i class="devicon-react-original-wordmark colored mx-2"></i>
          <i class="devicon-mysql-plain-wordmark colored mx-2"></i>
          <i class="devicon-mongodb-plain-wordmark colored mx-2"></i>
          <i class="devicon-visualstudio-plain colored mx-2"></i>
          <i class="devicon-webpack-plain colored mx-2"></i>
        </div>
      </div>
    </>
  );
}
