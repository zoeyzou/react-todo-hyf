// fetch data and store it in a variable
const movieUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

// let movieData;

fetch(movieUrl)
  .then((data) => {
    return data.json();
  })
  .then((movieList) => {
    // movieData = movieList;

    const movieFactory = createMovieFactory(movieList);
    const taggedMovies = movieFactory.tagMovies();

    // click event to show all movies
    document.querySelector('#all-movie-button')
      .addEventListener('click', () => {
        const userInput = document.querySelector('#user-input').value;
        const tbody = document.querySelector('.table-body');
        
        if (!userInput) {
          const content = renderMoviesInDom(movieList);
          tbody.innerHTML = content;
        } else {
          const filteredMovieList = movieFactory.filterMovies(userInput);
          const content = renderMoviesInDom(filteredMovieList);
          tbody.innerHTML = content;
        }
        



      })
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

    filterMovies(keyword) {
      return movieList.filter(movie => movie.title.includes(keyword));
    }


  }
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

