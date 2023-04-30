const noteRoutes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { addNote } = require("../lib/notesFunction");
const fs = require("fs");
const path = require("path");

// GET Route for retrieving all the notes
noteRoutes.get("/", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    console.log(data);
    res.json(data);
  });
  // let data = notes;
  // res.json(data);
});

// POST Route for a new note
noteRoutes.post("/", (req, res) => {
  // req.body.id = uuidv4();
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    let notesArray = JSON.parse(data);

    const newNote = req.body;
    notesArray.push(newNote);
    // console.log(data);
    // res.json(data);
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notesArray));
    res.json(newNote);
  });
});

module.exports = noteRoutes;
