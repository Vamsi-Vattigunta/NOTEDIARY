const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
// configuring .env
dotenv.config();
//connecting DB
connectDB();

//to accept JSON data
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// --------------------------deployment------------------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV);
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  console.log("hi2");
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

const PORT = process.env.PORT || 5001;
//creating a web server
app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
