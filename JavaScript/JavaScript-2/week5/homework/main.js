// Step-1.1
function fizzBuzz(start, end, callback1, callback2) {
  let array = [];
  if (start > end) {
    for (let i = start; i >= end; i--) {
      if (i % 3 === 0) {
        callback1(i);
      }
      if (i % 5 === 0) {
        callback2(i);
      }
      array.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0) {
        callback1(i);
      }
      if (i % 5 === 0) {
        callback2(i);
      }
      array.push(i);
    }
  }  
  return array;
}

function callback1(num) {
  console.log(num + ' can be divided by 3');
}

function callback2(num) {
  console.log(num + ' can be divided by 5');
}

console.log(fizzBuzz(1, 20, callback1, callback2));

// Step-1.2
function repeatStringNumTimes(str, num) {
  let newStr = '';

  if (num <= 0) {
    return '';
  }

  for (let i = num; i > 0; i--) {
    newStr += str;
  }

  return newStr;
}

console.log(repeatStringNumTimes('ha', 5));

// Step-1.7
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

//Step-3
const url = 'https://api.github.com/orgs/HackYourFuture/repos';
const xhr = new XMLHttpRequest();
let response,
    baseUrl = 'https://api.github.com/repos/HackYourFuture/';

document.querySelector('#click-me-button').addEventListener('click', clickMe);
document.querySelector('#data-fetch-button').addEventListener('click', function () {
  let demoArea = document.querySelector('#demo-area');
  let listArea = document.createElement('ol');
  let demoData = formData(response, baseUrl, 'name');
  listArea.innerHTML = demoData;
  demoArea.appendChild(listArea);
});
document.querySelector('#search-button').addEventListener('click', function () {
  const searchValue = document.querySelector('#input-value').value;
  if (!searchValue) {
    document.querySelector('#demo-area').innerHTML = 'Please input a search item.';
  }
  let result = findItemByUrl(response, baseUrl, searchValue);
  document.querySelector('#demo-area').innerHTML = result;
});

xhr.addEventListener('load', function(evt) {
  if (this.status === 200 && this.readyState === 4) {
    response = JSON.parse(xhr.responseText);
  } else {
    console.log('The response is an error, might have something to do with url');
  }
});

xhr.addEventListener('error', function () {
  console.log('The server might have problem.');
});

xhr.open('GET', url);
xhr.send();

function clickMe() {
  console.log('You clicked me!');
}

function formData(array, baseUrl, prop) {
  let content = '';
  array.forEach(elem => {
    let Url = formTaggedItem(formUrl(baseUrl, elem[prop]), 'a');
    let list = formList(elem[prop], Url);
    content += list;
  });
  return content;
}

function formList(elem1, elem2) {
  let content = `${elem1}: ${elem2}`;
  return formTaggedItem(content, 'li');
}

function formUrl(baseUrl, name) {
  return `${baseUrl}${name}`;
}

function formTaggedItem(content, tagName) {
  if (tagName === 'a') {
    return `<a href='${content}'>${content}</a>`;
  }
  return `<${tagName}>${content}</${tagName}>`;
}

function findItemByUrl(array, baseUrl, value) {
  let url = formUrl(baseUrl, value);
  for (let i = 0; i < array.length; i++) {
    let arrayItem = array[i]['url'].toLowerCase();
    let formedUrl = url.toLowerCase();
    if (arrayItem.includes(formedUrl)) {
      return formList(array[i]['name'], arrayItem);
    } 
  }
  return `The content you are searching for does not match any repo item's name! Please click "fetch API" to see the correct name to search for!`;
}