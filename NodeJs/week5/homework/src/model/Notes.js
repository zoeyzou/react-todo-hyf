const fs = require('fs');
const util = require('util');
const Note = require('./Note');

const writeFile = util.promisify(fs.writeFile);

class Notes {
  constructor(path) {
    this.path = path;
    this._notes = this.initNotes() || [];
  }

  initNotes() {
    const notesString = fs.readFileSync(this.path, 'utf8');
    return JSON.parse(notesString);
  }

  writeNotesToDB(notes) {
    const notesString = JSON.stringify(notes);
    return writeFile(this.path, notesString);
  }

  getNotes() {
    return this._notes;
  }

  getNotesByTags(tags) {
    tags = typeof tags === "string" ? [tags] : tags;

    return this._notes.filter(note => {
      if (!note.tags.length) return false;
      return tags.every(tag => note.tags.includes(tag));
    });
  }

  postNotes(addedNote) {
    this._notes = this._notes.concat(addedNote);
    this.writeNotesToDB(this._notes);
    return this._notes;
  }

  editNotes(id, content) {
    this._notes[id] = {...this._notes[id], ...content};
    this.writeNotesToDB(this._notes);
    return this._notes;
  }

  deleteNotes(id) {
    const index = this._notes.findIndex(note =>  note.id == id);
    this._notes.splice(index, 1);
    this.writeNotesToDB(this._notes);
    return this._notes;
  }
}

module.exports = Notes;