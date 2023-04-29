const express = require("express");
const path = require("path");
const { clog } = require("./Develop/middleware/clog"); //middleware function
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001; // deploy on heroku

const app = express(); // take all functionality from express and attach to the app

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
