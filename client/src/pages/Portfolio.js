import React from "react";
import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageGymApp from "../Images/Screenshots/homePage-gymApp.png";
import HikerHelper from "../Images/Screenshots/hikerHelper_screenshot2.png";
import NoteTaker from "../Images/Screenshots/homeScreenshotNoteTaker.png";
import WeatherDashboard from "../Images/Screenshots/weatherDashSS.png";
import portBackgroundImage from "../Images/tree_picture.png";
import Navbar from "../components/Navbar";
import EmployeeTracker from "../Images/Screenshots/addDepScreen.png";
import FitnessTracker from "../Images/Screenshots/fitTrackerScreenshot1.png";
import { Animated } from "react-animated-css";
import ProjectCard from "../components/ProjectCard";
import { Container } from "react-bootstrap";

export default function Portfolio() {
  const cardInfo = [
    {
      id: 1,
      body:
        "This is a gym tracker app which allows clients to create accounts, log in with existing accounts, see trainer information, and view and join classes. It also allows trainers to add or remove their own classes. Managers on this app are able to view a list of trainers employed by the gym, pull up an individual trainer's information, terminate a trainer's employment by removing that trainer from the database, or hire a new trainer by adding his/her information into the database. A manager can also view all classes available at the gym for the week, view class rosters, and add/remove members from class rosters.",
      technologies: "node.js, express, MySql, Sequelize, Bootstrap",
      title: "Dev Fit Logistical Gym Tracker App",
      deployedLink: "https://gym-logistical-tracker-duex.herokuapp.com/",
      gitHubLink: "https://github.com/smanter82/Gym-Logistical-Tracker",
      photo: HomePageGymApp,
    },
    {
      id: 2,
      body:
        "Hiker-Helper provides a quick and easy hub for all your hiking needs. It checks for weather conditions, provides difficulty ratings, and even gives you a map of the trail you're looking for.",
      technologies: "Materialize, JQuery, Third-Party API's",
      title: "Hiker Helper",
      deployedLink: "https://smanter82.github.io/HikerHelper/",
      gitHubLink: "https://github.com/smanter82/HikerHelper",
      photo: HikerHelper,
    },
    {
      id: 3,
      body:
        "This is an application designed to allow busy people to take and keep track of notes to help organize thoughts and plans. The user will be able to write, save, and delete notes. They will be able to come back and view previously created notes.",
      technologies: "node.js, express, JSON",
      title: "Note Taker App",
      deployedLink: "https://smanter82-note-taker.herokuapp.com/",
      gitHubLink: "https://github.com/smanter82/NoteTaker",
      photo: NoteTaker,
    },
    {
      id: 4,
      body:
        "This app allows users to see the weather outlook for multiple cities and plan a trip accordingly. When searching for a city, the user is presented with current and future conditions for that city and that city is added to the search history. The user can also go back and view the weather for previously searched cities.",
      technologies: "JQuery, AJAX, Third Party API's",
      title: "Weather Dashboard",
      deployedLink: "https://smanter82.github.io/WeatherDashboard/",
      gitHubLink: "https://github.com/smanter82/WeatherDashboard",
      photo: WeatherDashboard,
    },
    {
      id: 5,
      body:
        "This is a command-line Content Management System for managing a company's employees using node, inquirer, and MySQL. Users are able to view or add departments, employees, and employee roles within the database. They are also able to view employees by manager, update employee roles, update an employee's manager, and delete employees, roles, or departments. Lastly, they can view the salary budgets by department.",
      technologies: "node.js, Inquirer, MySql, console.table",
      title: "Employee Tracker",
      deployedLink:
        "https://drive.google.com/file/d/16wwgFVk9jyKBXV1mMqtB14lKW2YhFheA/view",
      gitHubLink: "https://github.com/smanter82/EmployeeTracker",
      photo: EmployeeTracker,
    },
    {
      id: 6,
      body:
        "This is a workout tracker which will allow a user to view,create, and track daily workouts. The user will also be able to log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of exercise. If the exercise is cardio, the user will be able to track the distance traveled. The app will allow users to reach their fitness goals more quickly by tracking their workout progress.",
      technologies: "Mongo, Mongoose",
      title: "Fitness tracker",
      deployedLink:
        "https://smanter82-fitness-tracker-app.herokuapp.com/?id=6025ef756384540015751e41",
      gitHubLink: "https://github.com/smanter82/Fitness_tracker",
      photo: FitnessTracker,
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div
        className="portfolioPage"
        style={{
          backgroundImage: `url(${portBackgroundImage})`,
        }}
      >
        <Container className="portfolioContainer d-flex">
          {cardInfo.map((info) => (
            // <Animated
            //   animationIn="fadeIn"
            //   animationOut="fadeOut"
            //   isVisible={true}
            // >
            <ProjectCard
              key={info.id}
              body={info.body}
              technologies={info.technologies}
              title={info.title}
              deployedLink={info.deployedLink}
              gitHubLink={info.gitHubLink}
              photo={info.photo}
            ></ProjectCard>
            // </Animated>
          ))}
        </Container>
      </div>
    </>
  );
}
