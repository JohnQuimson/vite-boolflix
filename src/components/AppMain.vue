<script>
import Film from './Film.vue';
import Serie from './Serie.vue';

import { store } from '../store';

export default {
  name: 'Main',

  data() {
    return {
      store,
    };
  },

  components: {
    Film,

    Serie,
  },
};
</script>

<template>
  <main>
    <!-- FILM -->
    <h2 v-if="store.films.length">Film</h2>
    <ul class="row container-sm">
      <Film
        v-for="film in store.films"
        :imgFilm="film.poster_path"
        :titoloFilm="film.title"
        :titOrigFilm="film.original_title"
        :overview="film.overview"
        :linguaFilm="film.original_language"
        :votoFilm="film.vote_average"
      />
    </ul>
    <!-- SERIE TV -->
    <h2 v-if="store.series.length">Serie TV</h2>
    <ul class="row container-sm">
      <Serie
        v-for="serie in store.series"
        :imgSerie="serie.poster_path"
        :titoloSerie="serie.name"
        :titOrigSerie="serie.original_name"
        :overview="serie.overview"
        :linguaSerie="serie.original_language"
        :votoSerie="serie.vote_average"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #141414;
  color: white;

  h2 {
    margin-top: 2vw;
    text-align: center;
    text-transform: uppercase;
    background: rgb(91, 16, 16);
    background: linear-gradient(
      180deg,
      rgba(91, 16, 16, 1) 0%,
      rgba(20, 20, 20, 1) 80%
    );
  }

  ul {
    width: 90vw;
    margin: 30px auto;
    padding: 0;
    display: flex;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
  }
}
</style>
