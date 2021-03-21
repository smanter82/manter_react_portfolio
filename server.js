const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioContact",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
// app.use(require("./routes/api.js"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
