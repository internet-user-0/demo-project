import MovieService from './js/api.js';

const fetchMovies = new MovieService();

console.log(fetchMovies.getSearchMovies());