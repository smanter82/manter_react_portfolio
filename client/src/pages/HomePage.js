import React from "react";
import "../styles/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Animated } from "react-animated-css";
import profilePic from "../Images/profile_pic.jpg";
import familyPic from "../Images/kids_on_bridge.jpg";

export default function HomePage() {
  return (
    <div className="homePage justify-content-center">
      <Navbar className="homeNav"></Navbar>
      <Container className="d-flex align-items-center">
        <Row className="d-flex">
          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="d-flex justify-content-center"
          >
            <Container>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Card className="mx-auto my-5" style={{ width: "30rem" }}>
                  <Card.Img
                    className="profilePic"
                    variant="top"
                    src={profilePic}
                  />
                  <Card.Body>
                    <Card.Title>About Me:</Card.Title>
                    <Card.Text>
                      Hello! I graduated from the University of New Hampshire
                      with a Masters of Arts in Teaching Secondary English. I
                      spent 13 years teaching middle school Language Arts, but
                      now it is time for a change. I have always enjoyed working
                      with computers. I have recently completed a coding
                      bootcamp through UNH. It was an amazing experience, and
                      now I look forward to using my passion and the coding
                      skills I've learned in the world of Web Programming.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
            </Container>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="d-flex justify-content-center"
          >
            <Container>
              <Animated
                animationIn="bounceInRight"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Card className="mx-auto my-5" style={{ width: "30rem" }}>
                  <Card.Img
                    className="familyPic"
                    variant="top"
                    src={familyPic}
                  />
                  <Card.Body>
                    <Card.Title>My family</Card.Title>
                    <Card.Text>
                      I am the mother of amazing twins. While they take up a lot
                      of time and energy, they have been super supportive of my
                      quest to dive into Web Development. They've stayed out of
                      my hair as much as they can while I've been doing
                      homework, and my daughter even practices learning to code
                      or type on her own computer next to me while I work.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
            </Container>
          </Col>
        </Row>
      </Container>
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
  );
}
