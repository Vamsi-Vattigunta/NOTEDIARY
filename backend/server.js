const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
// configuring .env
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5001;
//creating a web server
app.listen(5001, console.log(`server is running on PORT ${PORT}`));
