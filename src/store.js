import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,

  searchKey: '',
  films: [],
  config: {
    apiMoviesUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSeriesUrl: '',
    apiKey: 'f31deae15719f1f7190042c6907f91d8',
  },
});
