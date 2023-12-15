<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      store,
      errorMessage: '',
    };
  },

  methods: {
    filterFilms() {
      console.log(store.config.apiMoviesUrl);
      axios
        .get(store.config.apiMoviesUrl, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchKey,
          },
        })
        .then((response) => {
          store.films = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<template>
  <AppHeader />
  <AppMain @search="filterFilms()" />
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
