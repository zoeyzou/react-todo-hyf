## Step 1: Map, filter, reduce, and =>
---
1. Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

    Your solution could be something like this:
    ```javascript
    let numbers = [1, 2, 3, 4];
    let newNumbers = [];

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 !== 0) {
            newNumbers[i] = numbers[i] * 2;
        }
    }

    console.log("The doubled numbers are", newNumbers); // [2, 6]
    ```
    rewrite the above program using `map` and `filter` don't forget to use `=>`
2. Using this [json file](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json) as the source, build a function which does the following:

    a. Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
    
    b. Calculate the average rating of all the movies.

    c. Count the total number of Good, Average and Bad movies.

    d. Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive?
    
    e. Count the number of movies made between 1980-1989 (including both the years).

## Step 2: Continuing with the previous exercise
---
Note: Most of you have not completed the homework from last week, so this task will be difficult

* Add map, filter, reduce to your existing app to build an application that loads data from github, filters out based on certain value, map->reduces to a data object and render that object to the dom (using map again).
* For example you can try to use map, filter and reduce to show the most and the least forked repositories, watched repositories. And the total number of forks for all repo's. Also you can work with the data provided about the amount of commits or contributers.
* Add a readme to your repo explaining what your app does and how to use your app. Here's a [template](https://gist.github.com/jxson/1784669) and here you can see how to make your readme awesome.