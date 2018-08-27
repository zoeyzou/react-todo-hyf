// 1. write closure function

function createBase(x) {
  return y => y + x;
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// 2. rewrite ajax to promise

const usersURL = "https://jsonplaceholder.typicode.com/users";
let allUsers;
fetch(usersURL)
  .then(response => response.json())
  .catch(err => console.log('Something is probably wrong with the url: ' + err))
  .then(users => {
    allUsers = users;
    const userPromises = users.map(user => {
      const todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
      return fetch(todosURL);
    });
    return userPromises;
  })
  .then(promises => Promise.all(promises))
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(todoItems => {
    allUsers.forEach((user, i) => {
      user.todos = todoItems[i];
    });
    console.log(allUsers);
  });

// 3. rewrite snippet

const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];

window.onload = () => {
  for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
    // for each of our buttons, when the user clicks it...
    document.getElementById('btn-' + btnNum).onclick = function() {
        // tell her what she's won!
        alert(prizes[btnNum]);
    };
  }
}
