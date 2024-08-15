function Movie(title, director, rating) {
  this.title = title;
  this.director = director;
  this.rating = rating;
}

Movie.prototype.displayInfo = function() {
  return `${this.title} directed by ${this.director} with a rating of ${this.rating}`;
};

const MovieLibrary = (function() {
  let movies = [];

  function addMovie(movie) {
      movies.push(movie);
  }

  function getMovies() {
      return movies;
  }

  return {
      addMovie: function(title, director, rating) {
          const movie = new Movie(title, director, rating);
          addMovie(movie);
      },
      displayMovies: function() {
          const movieList = document.getElementById('movie-list');
          movieList.innerHTML = '';
          getMovies().forEach(movie => {
              const movieItem = document.createElement('div');
              movieItem.classList.add('movie-item');
              movieItem.textContent = movie.displayInfo();
              movieList.appendChild(movieItem);
          });
      }
  };
})();

document.getElementById('movie-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const director = document.getElementById('director').value;
  const rating = parseInt(document.getElementById('rating').value);

  MovieLibrary.addMovie(title, director, rating);
  MovieLibrary.displayMovies();

  this.reset();
});
