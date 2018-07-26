// Event listener for movie API fetch
const movieForm = document.querySelector('#movie-search-form');
const dataArea = document.querySelector('#data-area');
movieForm.addEventListener('submit', event => {
  event.preventDefault();

  const userInput = getUserInput('movie-name');

  //validate user input
  let isValid = checkUserInput(userInput, dataArea);
  if(!isValid) {
    return false;
  }
  
  //create table and tbody for accomodating data
  const tbody = createTable(dataArea, 'Poster', 'Movie Name'); 

  const url = getUrlByMovieName(userInput);
  getData(url, data => {
    if (!data) {
      dataArea.innerHTML = `
        <div class="alert alert-danger mx-auto" role="alert">
          Ops, the database says that your required data do not exist. Maybe Change the input?...
        </div>`;
      return false;
    }
    const movieList = data.Search;
    showMovies(movieList, tbody, createMovieData);
  });
});

// Event listener for course repo API fetch
// Show all the course info
const hyfUrl = 'https://api.github.com/orgs/HackYourFuture/repos';
const searchAll = document.querySelector('#all-repo-search-button');
searchAll.addEventListener('click', () => {
  dataArea.innerHTML = '';
  const tbody = createTable(dataArea, 'Course Name', 'Contributors'); 
  
  getData(hyfUrl, data => {
    showData(data, tbody, createCourseData);
  });
});

// Show the searched course repo
const searchOne = document.querySelector('#repo-search-form');
searchOne.addEventListener('submit', event => {
  event.preventDefault();

  const userInput = getUserInput('repo-name');

  //validate user input
  let isValid = checkUserInput(userInput, dataArea);
  if(!isValid) {
    return false;
  }

  //create table and tbody for accomodating data
  const tbody = createTable(dataArea, 'Course Name', 'Contributors'); 

  const url = 'https://api.github.com/orgs/HackYourFuture/repos';
  getData(url, data => {
    let validData = [];
    data.forEach(item => {
      if(item.html_url.includes(userInput)) {
        validData.push(item);
      }
    })
    if (validData.length !== 0) {
      showData(validData, tbody, createCourseData);
    } else {
      dataArea.innerHTML = `
        <div class="alert alert-danger mx-auto" role="alert">
          Ops, the database says that your required data do not exist. Maybe Change the input?...
        </div>`;
      return false;
    }
  })
});

// User input control
function checkUserInput(userInput, dataArea) {
  if (!userInput) {
    dataArea.innerHTML = `
      <div class="alert alert-danger mx-auto" role="alert">
        Hey you haven't input anything! Just type in some names and see what happens...
      </div>`;
    return false;
  } else {
    dataArea.innerHTML = '';
    return true;
  }
}

function getUserInput(domId) {
  const formData = new FormData(event.target);
  const userInput = formData.get(domId);
  return userInput;
}

// Get Url
function getUrlByRepo(string) {
  return `https://api.github.com/repos/HackYourFuture/${string}`;
}

function getUrlByMovieName(string) {
  return `http://www.omdbapi.com/?apikey=6d847b4e&type=movie&s=${string}&page=1`;
}

function getUrlByMovieID(id) {
  return `http://www.omdbapi.com/?apikey=6d847b4e&i=${id}`;
}

// Ajax call & validate data
function getData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  let data = [];

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.response);
      if (data.Error) {
        data = false;
      }
      callback(data);
    } 
    if (xhr.status !== 200) {
      console.log('oops, the link or the server might have some errors.');
    }
  }
  xhr.send();
}

// change DOM
function createTable(dataArea, ...header) {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'col-xs-12', 'mx-auto');
  dataArea.appendChild(table);
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">${header[0]}</th>
        <th scope="col">${header[1]}</th>
      </tr>
    </thead>`;
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  return tbody;
}

function showData(data, DOMEl, callback) {
  data.forEach(element => {
    const tr = callback(element);
    DOMEl.appendChild(tr);
  });
}

function showMovies(data, DOMEl, callback) {
  data.forEach(element => {
    const tr = document.createElement('tr');
    tr.innerHTML = callback(element);
    DOMEl.appendChild(tr);
    const detailArea = tr.querySelector('.details');

    tr.addEventListener('click', () => {
      event.preventDefault();
      showMovieDetails(element, detailArea);
    })
  });
}

function createMovieData(element) {
  return `
    <td scope="col">
      <p>${element.Title}</p>
      <div class="details"></div>
    </td>
    <td scope="col"><img style="width: 100px" src="${element.Poster}"></td>`;
}

function createCourseData(element) {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const url = getUrlByRepo(element.name);
  tdName.innerHTML = `
    <h3><a class="badge badge-dark" href="${url}" target="_blank">${element.name}</a></h3>
    <p>${element.description}</p>`;
  const contributors = getContributorList(element.contributors_url);
  const tdContent = document.createElement('td');
  tdContent.appendChild(contributors);
  tr.appendChild(tdName);
  tr.appendChild(tdContent);
  
  return tr;
}

function getContributorList(url) {
  const div = document.createElement('div');
  div.classList.add('list-group');
  getData(url, data => {
    data.forEach(item => {
      const a = document.createElement('a');
      a.classList.add('list-group-item', 'list-group-item-action');
      a.setAttribute('href', item.html_url);
      a.setAttribute('target', '_blank');
      a.innerHTML = item.login;
      const img = document.createElement('img');
      img.setAttribute('src', item.avatar_url);
      img.classList.add('rounded', 'float-right');
      img.style.width = '80px';
      a.appendChild(img);
      div.appendChild(a);
    });
  });
  return div;
}

function showMovieDetails(movie, detailArea) {
  const url = getUrlByMovieID(movie.imdbID);
  getData(url, data => {
    detailArea.innerHTML = `
        <ul>
          <li>IMDB Rating: ${data.imdbRating}</li>
          <li>IMDB Vote Count: ${data.imdbVotes}</li>
          <li>IMDB ID: ${data.imdbId}</li>
          <li>Publish Year: ${data.Year}</li>
          <li>Actors: ${data.Actors}</li>
        </ul>
        `;
  })
}