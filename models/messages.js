const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  contact_name: {
    type: String,
    trim: true,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  message: {
    type: String,
  },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
