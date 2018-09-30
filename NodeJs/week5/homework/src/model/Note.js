class Note {
  constructor(title, content, tags) {
    this.id = null;
    this.title = title;
    this.content = content;
    this.tags = [].concat(tags);
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Title is required and should be string');
    }
    this._title = value;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      tags: this.tags
    }
  }
}

module.exports = Note;