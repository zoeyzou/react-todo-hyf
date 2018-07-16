# Homework requirement

## Step-1
### 1. You must write a function that takes 4 arguments.

  * A start value
  * An end value
  * A callback to call if the number is divisible by 3
  * A callback to use if the number is divisible by 5
  * The function should generate an array containing values from start value to end value (inclusive).

  Then the function should iterate over the array and call the second argument if the array value is divisible by 3

  The function should call the second argument if the array value is divisible by 5

  Both functions should be called if the array value is divisible by both 3 and 5

### 2. Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

### 7 If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

## Step-3
Make a website that fetches (= to get) data asynchronously.

1. Create a new website with external js file

2. Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'

3. Create a function that fetches from The Github API. For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos) (the one we used last week). For help on this check this SO post

4. Display the data that you get from the Github API on your web page.

5. Now link the two together: When you click the button -> get the data from the Github API and display it on your website

6. Make all the repositories link their own page in Github. Use the value of the key: `name` to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual `name` of the repository, for example `CommandLine`). Make sure the link opens in a new tab.

7. BONUS: if you look at this:
  ```
  `https://api.github.com/repos/HackYourFuture/CommandLine`
  ```
  You can see CommandLine in the URL. These are called "query parameters" and let us specify in detail what we want from the API. Play around with this. For example you can make two buttons that either get data for a specific repository, JavaScript or Node.js. Or go even more crazy and make users type in a search box 'JavaScript' and then send that to the API by changing the repository.