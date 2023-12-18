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
    Search() {
      //filmsenza
      axios
        .get(store.config.apiMoviesUrl, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchKey,
            language: 'it-IT',
          },
        })
        .then((response) => {
          store.films = response.data.results;
          console.log('Film');
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
          this.store.films = [];
        });

      //serie tv
      axios
        .get(store.config.apiSeriesUrl, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchKey,
            language: 'it-IT',
          },
        })
        .then((response) => {
          store.series = response.data.results;
          console.log('Serie');
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
          this.store.series = [];
        });

      store.searchKey = '';
    },
  },
};
</script>

<template>
  <div class="cont-master">
    <div>
      <AppHeader @call="Search()" />
      <AppMain />
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
