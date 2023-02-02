import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b972cd435eef10c3549386c0239d193f';
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

export default class MovieService {
  constructor() {
    this.page = 1;
    this.searchQuery = 'pirat';
    this.language = '';
    this.include_adult = '';
  }


  async getSearchMovies() {
    try {
      const options = {
        params: {
          query: this.searchQuery,
          page: this.page,
          include_adult: this.include_adult,
          language: this.language,
        },
      };
      const response = await axios.get(SEARCH_URL,options);
      return response.data;

    } catch (e) {
      console.log(e);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}