const router = require("express").Router();
const db = require("../models/");

router.route("/message").post((req, res) => {
  const newMessages = new db.Messages({
    contact_name: req.body.contact_name,
    email: req.body.email,
    message: req.body.message,
  });
  newMessages
    .save()
    .then((dbMessages) => res.send(dbMessages))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
