import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,

  searchKey: '',
  films: [],
  series: [],
  cast: [],
  config: {
    apiMoviesUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSeriesUrl: 'https://api.themoviedb.org/3/search/tv',
    apiKey: 'f31deae15719f1f7190042c6907f91d8',
    castUrl: 'https://api.themoviedb.org/3/movie/{movie_id}/credits',
  },
  imgUrlBase: 'https://image.tmdb.org/t/p/w342',
});
