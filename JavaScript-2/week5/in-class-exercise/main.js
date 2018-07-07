const appendArea = document.querySelector('#append-area');

/* Exercise 1 */
let count = 0;
document.querySelector('#count-up').addEventListener('click', function () {
  countUp();
  appendArea.innerHTML = count;
});
document.querySelector('#log-in').addEventListener('click', function() {
  delayLogin(notif, 5000);
});

function countUp() {
  return count++;
}

function delayLogin(callback, time) {
  window.setTimeout(callback, time);
}

function notif() {
  appendArea.innerHTML = `<p>Logged in 5 seconds.</p>`;
}

/* Exercise 2 */
document.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  appendArea.innerHTML = `<p>DOM fully loaded and parsed.</p>`;
}

function showData(objArray, prop) {
  const data = objArray.map(elem => elem[prop]);
  return data;
}

const url = 'http://api.open-notify.org/astros.json';
// Create new ajax call with the js function called XMLHttpRequest
const req = new XMLHttpRequest();
let successfulPeople;

req.addEventListener('load', function (data) {
  // This in here is our callback function
  // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
  if (this.status === 200) {
    successfulPeople = JSON.parse(req.responseText);
  } else {
    console.log('Something is probably wrong with the url');
  }
});

req.addEventListener('error', function () {
  console.log('Server error like timeout');
});

// initializes a request with an http method
req.open("GET", url);
// Sends the request 
req.send();


/* Exercise 3 */
document.querySelector('#successful-people').addEventListener('click', function () {
  const people = successfulPeople.people;
  const names = showData(people, 'name');
  const nameList = formContent(names);
  const numberOfPeople = `<p>There are ${people.length} people who landed on the moon.</p>`;
  appendArea.innerHTML = numberOfPeople + nameList;
});

function formContent(array) {
  let content = '';
  array.forEach(elem => content += `<p>${elem}</p>`);
  return content;
}