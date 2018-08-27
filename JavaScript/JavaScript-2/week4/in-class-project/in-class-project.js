document.querySelector("#add-button").addEventListener("click", () => {
  const foodName = document.querySelector('#food-name').value;
  const foodType = document.querySelector('input[type="radio"]').value;
  const foodAmount = document.querySelector('#amount').value;
  const demoArea = document.querySelector('#demo-area');
  storeLocally(addList(foodName, foodType, foodAmount));
  showList(demoArea);
});

function addList(foodName, foodType, foodAmount) {
  let list = [];
  const food = {
    name: foodName,
    type: foodType,
    amount: foodAmount
  };
  list.push(food);
  return list;
}

function storeLocally(list) {
  const foodList = JSON.parse(window.localStorage.getItem('foodList')) || [];
  let newList = foodList.concat(list);
  window.localStorage.setItem('foodList', JSON.stringify(newList));
}

function showList(demoArea) {
  let output="";
  const foodList = JSON.parse(window.localStorage.getItem('foodList')) || [];
  for (let i = 0; i < foodList.length; i++) {
    output += `<p>${i+1}: ${foodList[i].name}  ${foodList[i].type}  ${foodList[i].amount} </p>`;
  }
  demoArea.innerHTML= output;
}