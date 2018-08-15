class Movies {
  
  static filterByKeyword(keyword, movies) {
    return movies.filter(movie => {
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
  }

  static filterByTag(tagName, movies) {
    const taggedMovies = Movies.tagMovies(movies);
    return taggedMovies.filter(movie => movie.tag === tagName);
  }

  static filterByDecade(movieYearCode, movies) {
    const groupedMovies = Movies.groupByDecade(movies);
    return groupedMovies[movieYearCode];
  }

  static groupByDecade(movies) {
    return movies.reduce((accumulator, currentMovie) => {
        let movieYearCode = Math.floor(currentMovie.year / 10); // get 3 digits of each movie to define to decade

        if (movieYearCode < 195) {
          movieYearCode = 100;
        } // set all the old movies to one category

        accumulator[movieYearCode] ? 
          accumulator[movieYearCode].push(currentMovie) :
          accumulator[movieYearCode] = []; // push the movie to the object key to categorize, if no such key then create one

        return accumulator;
      },{});
  }

  static tagMovies(movies) {
    movies.forEach(movie => {
      if (movie.rating >= 7) {
        movie.tag = 'Good';
      } else if (movie.rating < 4) {
        movie.tag = 'Bad';
      } else {
        movie.tag = 'Average';
      }
    });
    return movies;
  }
}

class Dom {
  static renderMoviesInDom(movieList, tableEl) {
    const tableContent = movieList.reduce((accumulator, current, index) => {
      const content = `
        <tr>
          <td>${index + 1}</td>
          <td>${current.title}</td>
          <td>${current.year}</td>
          <td>${current.rating}</td>
          <td>${current.votes}</td>
          <td>${Dom._secondToHour(current.running_times)}h</td>
          <td>${current.tag}</td>
        </tr>
        `;
      accumulator += content;
      return accumulator;
    }, '');
    tableEl.innerHTML = tableContent;
  }

  static renderResultInDom(movieList, domEl) {
    const averageRating = (Dom._getAverageRating(movieList)).toFixed(2);
    domEl.innerHTML = `Total result is ${movieList.length}, the average rating of all result is ${averageRating}.`;
  }

  static _secondToHour(second) {
    return (second / 3600).toFixed(1);
  }

  static _getAverageRating(movieList) {
    return (movieList.reduce((accumulator, current) => accumulator + current.rating, 0)) / movieList.length;
  }
}

// fetch data and store it in a variable
const movieUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

// let movieFactory, movieData, taggedMovies, filteredMovieList;
const tbody = document.querySelector('.table-body');
const resultArea = document.querySelector('.result');

fetch(movieUrl)
  .then(response => response.json())
  .then(list => {
    // movieList2.tagMovies().filterByTags('Good').filterByKeyword('happy');
    
    document.querySelector('.search-form')
      .addEventListener('submit', event => {
        
        event.preventDefault();
        
        const form = new FormData(event.target);
        const inputKeywords = form.get('keywords');
        const movieYear = form.get('year');
        const movieTag = form.get('tag');

        let filteredMovieList = list;

        if (movieYear !== 'all') {
          filteredMovieList = Movies.filterByDecade(movieYear, filteredMovieList);
        }

        if (movieTag !== 'all') {
          filteredMovieList = Movies.filterByTag(movieTag, filteredMovieList);
        }

        filteredMovieList = Movies.filterByKeyword(inputKeywords, filteredMovieList);
        console.log(filteredMovieList);
        
        Dom.renderMoviesInDom(filteredMovieList, tbody);
        Dom.renderResultInDom(filteredMovieList, resultArea);
    });
  })
