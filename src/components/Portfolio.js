import React from "react";
import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import homePageGymApp from "../Images/Screenshots/homePage-gymApp.png";
import HikerHelper from "../Images/Screenshots/hikerHelper_screenshot2.png";
import NoteTaker from "../Images/Screenshots/homeScreenshotNoteTaker.png";
import WeatherDashboard from "../Images/Screenshots/weatherDashSS.png";
// import Button from "react-bootstrap/Button";
import portBackgroundImage from "../Images/tree_picture2.png";
import { Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div style={{ backgroundImage: `url(${portBackgroundImage})` }}>
      <Row className="d-flex justify-content-center">
        <Card className="mx-5 my-5" style={{ width: "30%" }}>
          <Card.Img variant="top" src={homePageGymApp} />
          <Card.Body>
            <Card.Title>Dev Fit Logistical Gym Tracker App</Card.Title>
            <Card.Text>
              This is a gym tracker app which allows clients to create accounts,
              log in with existing accounts, see trainer information, and view
              and join classes. It also allows trainers to add or remove their
              own classes. Managers on this app are able to view a list of
              trainers employed by the gym, pull up an individual trainer's
              information, terminate a trainer's employment by removing that
              trainer from the database, or hire a new trainer by adding his/her
              information into the database. A manager can also view all classes
              available at the gym for the week, view class rosters, and
              add/remove members from class rosters..
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://gym-logistical-tracker-duex.herokuapp.com/">
              Deployed App
            </Card.Link>
            <Card.Link href="https://github.com/smanter82/Gym-Logistical-Tracker">
              GitHub Repository
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className="mx-5 my-5" style={{ width: "30%" }}>
          <Card.Img variant="top" src={HikerHelper} />
          <Card.Body>
            <Card.Title>Hiker Helper</Card.Title>
            <Card.Text>
              Hiker-Helper provides a quick and easy hub for all your hiking
              needs. It checks for weather conditions, provides difficulty
              ratings, and even gives you a map of the trail you're looking for.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://smanter82.github.io/HikerHelper/">
              Deployed App
            </Card.Link>
            <Card.Link href="https://github.com/smanter82/HikerHelper">
              GitHub Repository
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
      <Row className="d-flex justify-content-center">
        <Card className="mx-5 my-5" style={{ width: "30%" }}>
          <Card.Img variant="top" src={NoteTaker} />
          <Card.Body>
            <Card.Title>Note Taker App</Card.Title>
            <Card.Text>
              This is an application designed to allow busy people to take and
              keep track of notes to help organize thoughts and plans. The user
              will be able to write, save, and delete notes. They will be able
              to come back and view previously created notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://smanter82-note-taker.herokuapp.com/">
              Deployed App
            </Card.Link>
            <Card.Link href="https://github.com/smanter82/NoteTaker">
              GitHub Repository
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className="mx-5 my-5" style={{ width: "30%" }}>
          <Card.Img variant="top" src={WeatherDashboard} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              This app allows users to see the weather outlook for multiple
              cities and plan a trip accordingly. When searching for a city, the
              user is presented with current and future conditions for that city
              and that city is added to the search history. The user can also go
              back and view the weather for previously searched cities.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://smanter82.github.io/WeatherDashboard/">
              Deployed App
            </Card.Link>
            <Card.Link href="https://github.com/smanter82/WeatherDashboard">
              GitHub Repository
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
