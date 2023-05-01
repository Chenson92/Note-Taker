const noteRoutes = require("express").Router();
const fs = require("fs");
const path = require("path");

// GET Route for retrieving all the notes
noteRoutes.get("/", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    console.log(data);
    res.json(data);
  });
});

// POST Route for a new note
noteRoutes.post("/", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    let notesArray = JSON.parse(data);
    const newNote = req.body;
    noteLength = notesArray.length.toString();
    newNote.id = noteLength;
    notesArray.push(newNote);

    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notesArray));
    res.json(newNote);
  });
});

module.exports = noteRoutes;
