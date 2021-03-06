import React from "react";
import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import homePageGymApp from "../Images/Screenshots/homePage-gymApp.png";
import HikerHelper from "../Images/Screenshots/hikerHelper_screenshot2.png";
import NoteTaker from "../Images/Screenshots/homeScreenshotNoteTaker.png";
import WeatherDashboard from "../Images/Screenshots/weatherDashSS.png";
import Button from "react-bootstrap/Button";
import portBackgroundImage from "../Images/tree_picture.png";
import { Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import EmployeeTracker from "../Images/Screenshots/addDepScreen.png";
import FitnessTracker from "../Images/Screenshots/fitTrackerScreenshot1.png";
import { Animated } from "react-animated-css";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="portfolioPage"
        style={{ backgroundImage: `url(${portBackgroundImage})` }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center align-items-stretch">
            <Animated
              animationIn="rotateInDownLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className=" ml-auto mr-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={homePageGymApp} />
                <Card.Body>
                  <Card.Title>Dev Fit Logistical Gym Tracker App</Card.Title>
                  <Card.Text>
                    This is a gym tracker app which allows clients to create
                    accounts, log in with existing accounts, see trainer
                    information, and view and join classes. It also allows
                    trainers to add or remove their own classes. Managers on
                    this app are able to view a list of trainers employed by the
                    gym, pull up an individual trainer's information, terminate
                    a trainer's employment by removing that trainer from the
                    database, or hire a new trainer by adding his/her
                    information into the database. A manager can also view all
                    classes available at the gym for the week, view class
                    rosters, and add/remove members from class rosters.
                    <br></br>
                    Technologies: node.js, express, MySql, Sequelize, Bootstrap
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://gym-logistical-tracker-duex.herokuapp.com/"
                    >
                      Deployed App
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/Gym-Logistical-Tracker"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
          <Col>
            <Animated
              animationIn="rotateInDownRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className="mr-auto ml-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={HikerHelper} />
                <Card.Body>
                  <Card.Title>Hiker Helper</Card.Title>
                  <Card.Text>
                    Hiker-Helper provides a quick and easy hub for all your
                    hiking needs. It checks for weather conditions, provides
                    difficulty ratings, and even gives you a map of the trail
                    you're looking for.
                    <br></br>
                    Technologies: Materialize, JQuery, Third-Party API's
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://smanter82.github.io/HikerHelper/"
                    >
                      Deployed App
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/HikerHelper"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col>
            <Animated
              animationIn="rotateIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className=" ml-auto mr-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={NoteTaker} />
                <Card.Body>
                  <Card.Title>Note Taker App</Card.Title>
                  <Card.Text>
                    This is an application designed to allow busy people to take
                    and keep track of notes to help organize thoughts and plans.
                    The user will be able to write, save, and delete notes. They
                    will be able to come back and view previously created notes.
                    <br></br>
                    Technologies: node.js, express, JSON
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-center">
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://smanter82-note-taker.herokuapp.com/"
                    >
                      Deployed App
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/NoteTaker"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
          <Col>
            <Animated
              animationIn="rotateIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className="mr-auto ml-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={WeatherDashboard} />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    This app allows users to see the weather outlook for
                    multiple cities and plan a trip accordingly. When searching
                    for a city, the user is presented with current and future
                    conditions for that city and that city is added to the
                    search history. The user can also go back and view the
                    weather for previously searched cities.
                    <br></br>
                    Technologies: JQuery, AJAX, Third Party API's
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-center">
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://smanter82.github.io/WeatherDashboard/"
                    >
                      Deployed App
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/WeatherDashboard"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col>
            <Animated
              animationIn="rotateInUpLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className=" ml-auto mr-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={EmployeeTracker} />
                <Card.Body>
                  <Card.Title>Employee Tracker</Card.Title>
                  <Card.Text>
                    This is a command-line Content Management System for
                    managing a company's employees using node, inquirer, and
                    MySQL. Users are able to view or add departments, employees,
                    and employee roles within the database. They are also able
                    to view employees by manager, update employee roles, update
                    an employee's manager, and delete employees, roles, or
                    departments. Lastly, they can view the salary budgets by
                    department.
                    <br></br>
                    Technologies: node.js, Inquirer, MySql, console.table
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-center">
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://drive.google.com/file/d/16wwgFVk9jyKBXV1mMqtB14lKW2YhFheA/view"
                    >
                      Walkthrough Video
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/EmployeeTracker"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
          <Col>
            <Animated
              animationIn="rotateInUpRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Card className="mr-auto ml-5 my-5" style={{ width: "75%" }}>
                <Card.Img variant="top" src={FitnessTracker} />
                <Card.Body>
                  <Card.Title>Fitness tracker</Card.Title>
                  <Card.Text>
                    This is a workout tracker which will allow a user to view,
                    create, and track daily workouts. The user will also be able
                    to log multiple exercises in a workout on a gien day and
                    track the name, type, weight, sets, reps, and duration of
                    exercise. If the exercise is cardio, the user will be able
                    to track the distance traveled. The app will allow users to
                    reach their fitness goals more quickly by tracking their
                    workout progress.
                    <br></br>
                    Technologies: Mongo, Mongoose
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-center">
                  <Button className="mr-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://smanter82-fitness-tracker-app.herokuapp.com/?id=6025ef756384540015751e41"
                    >
                      Deployed App
                    </Card.Link>
                  </Button>
                  <Button className="ml-5">
                    <Card.Link
                      className="grayText"
                      target="blank"
                      href="https://github.com/smanter82/Fitness_tracker"
                    >
                      GitHub Repository
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>
      </div>
    </>
  );
}
