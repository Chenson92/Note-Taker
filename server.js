const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001; // deploy on heroku

const app = express(); // take all functionality from express and attach to the app

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
app.use(express.static(path.join(__dirname, "Develop/public")));
const ROOT = { root: path.join(__dirname, "./Develop/public") };

// Path join gives you the absolute path from __dirname which is where THIS FILE is at
// And also fixes any differences between computer OS
// For example: Windows use ...\Develop\public

// GET Route for homepage
app.get("/", (req, res) => res.sendFile("index.html", ROOT));

// GET Route for notes page
app.get("/notes", (req, res) => res.sendFile("notes.html", ROOT));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
