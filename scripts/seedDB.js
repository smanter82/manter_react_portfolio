const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioContact",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
  }
);

const messagesSeed = [
  {
    // _id: 1,
    contact_name: "Sarah",
    email: "sarahmanter@gmail.com",
    message: "Test contact message",
  },
  {
    // _id: 2,
    contact_name: "Duncan",
    email: "duncanmanter@gmail.com",
    message: "Test contact message 2",
  },
  {
    // _id: 3,
    contact_name: "Maia",
    email: "maiamanter@gmail.com",
    message: "Test contact message 3",
  },
];

db.Messages.remove({})
  .then(() => db.Messages.collection.insertMany(messagesSeed))
  .then((data) => {
    console.log(data.result.n + " Messages records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Messages " + err);
    process.exit(1);
  });
