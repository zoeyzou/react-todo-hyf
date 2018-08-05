const numbersSubmit = document.querySelector('#numbers-submit');
numbersSubmit.addEventListener('submit', event => {
  event.preventDefault();

  const showArea = document.querySelector('.showNumbers');
  const formData = new FormData(event.target);
  const userInput = formData.get('arrayInput');
  const numberArray = convertStringArrayIntoNumberArray(userInput);

  if (!validateArrayItemsAsNumbers(numberArray)) {
    showArea.innerHTML = 'The input are not pure numbers, or separated with more than just comma. Please try again.';
    return false;
  }

  const newArray = doubleTheOdd(numberArray);
  const stringArray = JSON.stringify(newArray);
  showArea.innerHTML = `The odd numbers being provided got doubled, here is the result: ${stringArray}`;
});

const movieButton = document.querySelector('#movie-result');
movieButton.addEventListener('click', () => {
  const jsonUrl = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;
  const movieArea = document.querySelector('.movie-area');

  getAjaxData(jsonUrl, data => {
    const movieData = filterMovieData(data);
    // render the average rating
    const averageRating = renderCardInDom('Average rating of all movies', movieData.averageRatingOfAll);
    // render tag count of all
    const tagContent = `
      <p>Count of movies tagged as good: ${movieData.eachTagCount.good}</p>
      <p>Count of movies tagged as average: ${movieData.eachTagCount.average}</p>
      <p>Count of movies tagged as bad: ${movieData.eachTagCount.bad}</p>`;
    const tagCount = renderCardInDom('The total count of each movie tag', tagContent);
    // render all movies with tags
    const moviesAllTagged = renderCardInDom('All movies with tags based on their ratings', `Good (>= 7), Average (>= 4 and < 7), Bad (< 4)<br>Due to the enormous amount of data, please check console for result`);
    console.log(movieData.taggedMovies);
    // render count of matched movies
    const matchedCount = renderCardInDom('Movies matched with any of the keywords', `Keywords: ["The", "dog", "who", "is", "not", "a", "man"] <br> Total count: ${movieData.matchedCount}`);
    // render count of movies produced in certain period
    const productionCount = renderCardInDom('Count movies produced between 1980-1989', `Total count: ${movieData.totalMoviesProducedInPeriod}`);

    movieArea.innerHTML = averageRating + tagCount + moviesAllTagged + matchedCount + productionCount;
  })




  


});

// step 1.1 create a program filtering out even numbers and double the odd numbers in a array
function validateArrayItemsAsNumbers(array) {
  return array.every(item => !isNaN(item));
}

function doubleTheOdd(array) {
  return array.filter((number => number % 2 !== 0))
              .map((number => number * 2));
}

function convertStringArrayIntoNumberArray(stringArray) {
  return stringArray.split(',').map(Number);
}

// step 1.2 create a function deals with the provided json
// get data thru ajax
function getAjaxData(url, callback) {
  // Create new ajax call with the js function called XMLHttpRequest
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => request.status === 200 ? 
    callback(JSON.parse(request.responseText)) : console.log('Something is probably wrong with the url'));
  request.addEventListener('error', () => console.log('Server error like timeout'));
  // initializes a request with an http method
  request.open("GET", url);
  // Sends the request 
  request.send();
}

// create a function that encapsulates all the required data request
// function filterMovieData(jsonUrl) {
//   const sortedMovieData = {};
//   getAjaxData(jsonUrl, movieList => {
//     // tag each movie according to its rating
//     sortedMovieData.taggedMovies = rateMovies(movieList);
//     // console.log('new movie data is as follow: ');
//     // console.log(sortedMovieData.taggedMovies);

//     //calculate the average rating
//     sortedMovieData.averageRatingOfAll = getAverageMovieRating(movieList);
//     // console.log('the average rating of all the movies is: ' + sortedMovieData.averageRatingOfAll);

//     // count movie total with each tag
//     sortedMovieData.eachTagCount = countEachMovieTag(movieList);
//     // console.log('count of each tags: ');
//     // console.log(sortedMovieData.eachTagCount);

//     // check how many movies include given keywords
//     sortedMovieData.totalMatch = countMoviesWithKeywords(movieList, ["The", "dog", "who", "is", "not", "a", "man"]);
//     // console.log('totalMovieMatchToKeywords is ' + sortedMovieData.totalMatch);

//     // count movies produced between 1980-1989
//     sortedMovieData.totalMoviesProducedInPeriod = countMoviesByYear(movieList, 1980, 1989);
//     // console.log('total Movies Produced In between 1980 to 1989: ' + sortedMovieData.totalMoviesProducedInPeriod);
//   });
  
//   return sortedMovieData;
// }
function filterMovieData(movieList) {
  const sortedMovieData = {};
    // tag each movie according to its rating
    sortedMovieData.taggedMovies = rateMovies(movieList);
    // console.log('new movie data is as follow: ');
    // console.log(sortedMovieData.taggedMovies);

    //calculate the average rating
    sortedMovieData.averageRatingOfAll = getAverageMovieRating(movieList);
    // console.log('the average rating of all the movies is: ' + sortedMovieData.averageRatingOfAll);

    // count movie total with each tag
    sortedMovieData.eachTagCount = countEachMovieTag(movieList);
    // console.log('count of each tags: ');
    // console.log(sortedMovieData.eachTagCount);

    // check how many movies include given keywords
    sortedMovieData.totalMatch = countMoviesWithKeywords(movieList, ["The", "dog", "who", "is", "not", "a", "man"]);
    // console.log('totalMovieMatchToKeywords is ' + sortedMovieData.totalMatch);

    // count movies produced between 1980-1989
    sortedMovieData.totalMoviesProducedInPeriod = countMoviesByYear(movieList, 1980, 1989);
    // console.log('total Movies Produced In between 1980 to 1989: ' + sortedMovieData.totalMoviesProducedInPeriod);
  
  return sortedMovieData;
}

function rateMovies(movieData) {
  movieData.forEach(movie => {
    if (movie.rating >= 7) {
      movie.tag = 'Good';
    } else if (movie.rating < 4) {
      movie.tag = 'Bad';
    } else {
      movie.tag = 'Average';
    }
  });
  return movieData;
}

function getAverageMovieRating(movieData) {
  return movieData.reduce((accumulator, current) => accumulator + current.rating, 0) / movieData.length;
}

function countEachMovieTag(movieList) {
  return movieList.reduce((accumulator, current) => {
    if (current.tag === 'Good') {
      accumulator.good++;
    } else if (current.tag === 'Average') {
      accumulator.average++;
    } else {
      accumulator.bad++;
    }
    return accumulator;
  }, {good: 0, average: 0, bad: 0});
}

function countMoviesWithKeywords(movieList, keywordsArray) {
  const keywordsToLowerCase = keywordsArray.map(keyword => keyword.toLowerCase());
  
  const sum = movieList.reduce((accumulator, current) => {
    const isIncluded = current.title.toLowerCase().split(' ').some(word => keywordsToLowerCase.includes(word));
    if (isIncluded) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  return sum;
}

function countMoviesByYear(movieList, startYear, endYear) {
  const filteredMovies = movieList.filter(movie => Number(movie.year) >= startYear && movie.year <= endYear);
  return filteredMovies.length;
}

function renderCardInDom(header, bodyText) {
  return `
    <div class="col-md-3">
    <div class="card text-center">
      <div class="card-header">
        ${header}
      </div>
      <div class="card-body">
        <div class="card-text">${bodyText}</div>
      </div>
    </div>
  </div>`;
}

// const movieData = filterMovieData(jsonUrl);
// console.log(movieData);
