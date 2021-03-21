// const e = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioContact"
);

message1_id = ObjectId();
message2_id = ObjectId();
message3_id = ObjectId();

const messagesSeed = [
  {
    _id: message1_id,
    contact_name: "Sarah",
    email: "sarahmanter@gmail.com",
    message: "Test contact message",
  },
  {
    _id: message2_id,
    contact_name: "Duncan",
    email: "duncanmanter@gmail.com",
    message: "Test contact message 2",
  },
  {
    _id: message3_id,
    contact_name: "Maia",
    email: "maiamanter@gmail.com",
    message: "Test contact message 3",
  },
];
