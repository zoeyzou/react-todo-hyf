const baseUrl = 'http://localhost:8080/notes';
const form = document.querySelector('#noteForm');
const display = document.querySelector('#notes');

form.addEventListener('submit', event => {
  event.preventDefault();
  let data = {};
  data.title = form.elements['title'].value;
  data.content = form.elements['content'].value;
  data.tags = getCheckedTags(form.elements['tags']);

  postNotes(baseUrl, data)
    .then(res => {
      const table = createNoteTable(res);
      console.log(table);
      display.innerHTML = table;
    });

});

function createNoteTable(notes) {
  const tableRows = notes.map((note, index) => {
    return `
      <tr>
        <td>${index+1}</td>
        <td>${note.title}</td>
        <td>${note.content}</td>
        <td>${note.tags.map(tag => `<span class="badge badge-info">${tag}</span>`).join(' ')}</td>
      <tr>`;
  }).join('');
  return `
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Content</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function postNotes(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

function getNotes(url) {

}

function getCheckedTags(tags) {
  let checked = [];
  for (let tag of tags) {
    if (tag.checked) {
      checked.push(tag.value);
    }
  }
  return checked;
}