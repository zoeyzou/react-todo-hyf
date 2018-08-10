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
      return movieList.filter(movie => movie.title.includes(keyword));
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
        <td>${current.running_times}</td>
        <td>${current.tag}</td>
      </tr>
      `;
    accumulator += content;
    return accumulator;
  }, '');
  return tableContent;
}

function renderResultInDom(movieList) {
  const averageRating = (getAverageRating(movieList)).toFixed(2);
  return `Total result is ${movieList.length}, the average rating of all result is ${averageRating}.`;
}

function getAverageRating(movieList) {
  return (movieList.reduce((accumulator, current) => accumulator + current.rating, 0)) / movieList.length;
}