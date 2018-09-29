const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const notesRouter = require('./routes/notes');

console.log('inside index', __dirname);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/notes', notesRouter);

app.listen(port, () => console.log(`App listening on port ${port}.`));