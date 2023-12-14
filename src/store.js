import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  apiUrl:
    'https://api.themoviedb.org/3/search/movie?api_key=f31deae15719f1f7190042c6907f91d8',
  searchKey: '',
});
