const e = require("express");
const mongoose = require("mongoose");
const { getMaxListeners } = require("node:process");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioContact",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const contactSeed = [
  {
    contact_name: "Sarah",
    email: "sarahmanter@gmail.com",
    message: "Test contact message",
  },
  {
    contact_name: "Duncan",
    email: "duncanmanter@gmail.com",
    message: "Test contact message 2",
  },
  {
    contact_name: "Maia",
    email: "maiamanter@gmail.com",
    message: "Test contact message 3",
  },
];
