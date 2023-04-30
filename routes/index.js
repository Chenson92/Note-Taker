const express = require("express");

// Import our modular router for notes
const aa = require("./notes");

const app = express();

app.use("/notes", aa);

module.exports = app;
