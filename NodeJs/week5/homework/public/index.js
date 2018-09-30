const baseUrl = 'http://localhost:8080/notes';
const form = document.querySelector('#noteForm');
const filter = document.querySelector('#filter');
const filters = document.querySelectorAll('.filter');
const display = document.querySelector('#notes');
let tags = [];

window.addEventListener('load', event => {
  getNotes(baseUrl)
    .then(res => {
      const table = createNoteTable(res);
      display.innerHTML = table;
    });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  let data = {};
  data.title = form.elements['title'].value;
  data.content = form.elements['content'].value;
  data.tags = getCheckedTags(form.elements['tags']);

  postNotes(baseUrl, data)
    .then(res => {
      const table = createNoteTable(res);
      display.innerHTML = table;
      form.reset();
      initiateFilter(filters);
    });
});

filter.addEventListener('click', (event) => {
  if (event.target.classList.contains('filter')) {
    if (event.target.checked) {
      tags.push(event.target.value);
    } else {
      tags = tags.filter(tag => tag !== event.target.value);
    }
    const query = tags.map(tag => `tags=${tag}`).join('&') || '';
    const url = !tags.length ? baseUrl : `${baseUrl}?${query}`;
    getNotes(url)
      .then(res => {
        console.log(res);
        const table = createNoteTable(res);
        display.innerHTML = table;
      });
  }
});

display.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    const id = event.target.id;
    console.log(id);
    deleteNotes(baseUrl, id)
      .then(res => {
        const table = createNoteTable(res);
        display.innerHTML = table;
      })
  }
});


function initiateFilter(filters) {
  filters.forEach(filter => filter.checked = false);
}

function createNoteTable(notes) {
  const tableRows = notes.reverse().map((note, index) => {
    return `
      <tr class="note" >
        <td>${notes.length - index}</td>
        <td>${note.title}</td>
        <td>${note.content}</td>
        <td>${note.tags.map(tag => `<span class="badge badge-info">${tag}</span>`).join(' ')}</td>
        <td><button type="button" id=${note.id} class="btn btn-outline-danger btn-delete">Delete</button></td>
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
          <th>Action</th>
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

function deleteNotes(url, id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json());
}

function getNotes(url) {
  return fetch(url).then(response => response.json());
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