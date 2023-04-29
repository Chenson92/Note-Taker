const notesRoute = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { addNote } = require("../lib/notesFunction");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
  let data = notes;
  res.json(data);
});

// POST Route for a new note
notes.post("/", (req, res) => {
  req.body.id = uuidv4();
  const newNote = addNote(req.body, notes);
  res.json(newNote);
});

module.exports = notesRoute;
