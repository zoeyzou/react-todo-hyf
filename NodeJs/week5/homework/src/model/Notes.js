const fs = require('fs');
const util = require('util');
const Note = require('./Note');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
  constructor(path) {
    this.path = path;
    this._notes = this.initNotes() || [];
  }

  // get notes() {
  //   return this._notes;
  // }

  initNotes() {
    const notesString = fs.readFileSync(this.path, 'utf8');
    return JSON.parse(notesString);
  }

  writeNotesToDB(notes) {
    return writeFile(this.path, JSON.stringify(this._notes))
  }

  // async getNotes() {
  //   const notes = await readFile(this.path, 'utf8');
  //   console.log(notes);
  //   return notes;
  // }
  getNotes() {
    return this._notes;
  }

  // async postNotes(addedNotes) {
  //   const notes = await readFile(this.path, 'utf8');
  //   const newNotes = JSON.parse(notes).concat(addedNotes);
  //   await writeFile(this.path, JSON.stringify(newNotes));
  //   return readFile(this.path, 'utf8');
  // }
  postNotes(addedNotes) {
    this._notes = this._notes.concat(addedNotes);
    this.writeNotesToDB(this.path, JSON.stringify(this._notes));
    return this._notes;
  }

  // async editNotes(id, content) {
  //   let notes = await readFile(this.path, 'utf8');
  //   notes = JSON.parse(notes);
  //   notes[id] = {...notes[id], ...content};
  //   await writeFile(this.path, JSON.stringify(notes));
  //   return readFile(this.path, 'utf8');
  // }
  editNotes(id, content) {
    this._notes[id] = {...this._notes[id], ...content};
    this.writeNotesToDB(this.path, JSON.stringify(this._notes));
    return this._notes;
  }

  deleteNotes(id) {
    this._notes.splice(id, 1);
    this.writeNotesToDB(this.path, JSON.stringify(this._notes));
    return this._notes;
  }
}

module.exports = Notes;