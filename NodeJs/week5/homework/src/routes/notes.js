const express = require('express');
const Note = require('../model/Note');
const Notes = require('../model/Notes');
const path = require('path');

const notesPath = path.join(__dirname, '..', 'notesDB/notes.json');
const notes = new Notes(notesPath);

const notesRouter = express.Router();

// notesRouter.get('/', (req, res) => {
//   notes.getNotes()
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).end(err));
// });
notesRouter.get('/', (req, res) => {
  res.status(200).send(notes.getNotes());
});

// notesRouter.post('/', (req, res) => {
//   const newNotes = req.body.map(body => {
//     if (!body.title || typeof body.title !== 'string') {
//       throw new Error('Request should include body title as a string');
//     }
//     return new Note(body.title, body.content, body.tags || []);
//   });
//   notes.postNotes(newNotes)
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).end(err));
// });
notesRouter.post('/', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());
    if (!body.title || typeof body.title !== 'string') {
      return res.status(400).end('Posted note should have string title');
    }
    const addedNotes = new Note(body.title, body.content, body.tags || []);
    const newNotes = notes.postNotes(addedNotes);
    res.status(200).send(newNotes);
  })

});

// notesRouter.patch('/:id', (req, res) => {
//   const id = req.params.id;
//   notes.editNotes(id, req.body)
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).end(err.toString()));
// });
notesRouter.patch('/:id', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());
    const id = req.params.id;
    const newNotes = notes.editNotes(id, body);
    res.status(200).send(newNotes);
  })
});

notesRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const newNotes = notes.deleteNotes(id);
  res.status(200).send(newNotes);
});


module.exports = notesRouter;



