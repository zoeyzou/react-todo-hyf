// fetch data and store it in a variable
const movieUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

let movieFactory, movieData, taggedMovies, filteredMovieList;
const tbody = document.querySelector('.table-body');
const resultArea = document.querySelector('.result');

fetch(movieUrl)
  .then((data) => {
    return data.json();
  })
  .then((movieList) => {
    movieData = movieList;

    movieFactory = createMovieFactory(movieList);
    taggedMovies = movieFactory.tagMovies();

    // click event to show all movies
    document.querySelector('#all-movie-button')
      .addEventListener('click', () => {
        const userInput = document.querySelector('#user-input').value;
        let tableContent, result;
        
        if (!userInput) {
          tableContent = renderMoviesInDom(movieList);
          result = renderResultInDom(movieList);
        } else {
          const filteredMovieList = movieFactory.filterMoviesByKeyword(userInput);
          tableContent = renderMoviesInDom(filteredMovieList);
          result = renderResultInDom(filteredMovieList);
        }

        tbody.innerHTML = tableContent;
        resultArea.innerHTML = result;
      })

});


// radio buttons event
document.querySelectorAll('.custom-control-input')
  .forEach(element => {
    element.addEventListener('click', () => {

      if (!movieData) {
        return false;
      }

      let content, result;
      let movieList = filteredMovieList || movieData;
      
      if (element.value === 'all') {
        content = renderMoviesInDom(movieList);
        result = renderResultInDom(movieList);
      } else {
        const filteredMovies = filterMoviesByTags(movieList, element.value);
        content = renderMoviesInDom(filteredMovies);
        result = renderResultInDom(filteredMovies);
      }

      tbody.innerHTML = content;
      resultArea.innerHTML = result;
    });

  });

/* -------------------------------------------------------------
    functions
  */

function createMovieFactory(movieList) {
  return {

    tagMovies() {
      movieList.forEach(movie => {
        if (movie.rating >= 7) {
          movie.tag = 'Good';
        } else if (movie.rating < 4) {
          movie.tag = 'Bad';
        } else {
          movie.tag = 'Average';
        }
      });
      return movieList;
    },

    filterMoviesByKeyword(keyword) {
      return movieList.filter(movie => {
        const keywordToLowerCase = keyword.toLowerCase();
        if (keywordToLowerCase.split(' ').length > 1) {
          return movie.title
                  .split(' ')
                  .map(word => word.toLowerCase())
                  .join(' ')
                  .includes(keywordToLowerCase);
        }
        const movieTitleLowerCase = 
                movie.title
                .split(' ')
                .map(word => word.toLowerCase())
                .join(' ');

        return movieTitleLowerCase.includes(keywordToLowerCase);
      });
    },


  }
}

function filterMoviesByTags(movieList, tagName) {
  return movieList.filter(movie => {
    return movie.tag === tagName;
  });
}

function renderMoviesInDom(movieList) {
  const tableContent = movieList.reduce((accumulator, current, index) => {
    const content = `
      <tr>
        <td>${index + 1}</td>
        <td>${current.title}</td>
        <td>${current.year}</td>
        <td>${current.rating}</td>
        <td>${current.votes}</td>
        <td>${secondToHour(current.running_times)}h</td>
        <td>${current.tag}</td>
      </tr>
      `;
    accumulator += content;
    return accumulator;
  }, '');
  return tableContent;
}

function secondToHour(second) {
  return (second / 3600).toFixed(1);
}

function renderResultInDom(movieList) {
  const averageRating = (getAverageRating(movieList)).toFixed(2);
  return `Total result is ${movieList.length}, the average rating of all result is ${averageRating}.`;
}

function getAverageRating(movieList) {
  return (movieList.reduce((accumulator, current) => accumulator + current.rating, 0)) / movieList.length;
}