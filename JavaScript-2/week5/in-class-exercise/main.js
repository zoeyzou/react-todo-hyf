/* Exercise 1 */
let count = 0;
document.querySelector('#count-up').addEventListener('click', countUp);
document.querySelector('#log-in').addEventListener('click', function() {
  delayLogin(notif, 5000);
});
document.querySelector('#successful-people').addEventListener('click', function () {
  console.log(successfulPeople.people[0].name);
});

function countUp() {
  console.log(count);
  count += 1;
}

function delayLogin(callback, time) {
  window.setTimeout(callback, time);
}

function notif() {
  console.log('Logged in 5 seconds');
}

/* Exercise 2 */
document.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  console.log('DOM fully loaded and parsed');
}

function showNames(obj) {
  const names = obj.forEach(elem => {
    
  });
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
    console.log(successfulPeople);
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