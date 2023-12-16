<script>
import Film from './Film.vue';
import Serie from './Serie.vue';
import Search from './Search.vue';
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
    Search,
    Serie,
  },
};
</script>

<template>
  <main>
    <Search @call="$emit('call')" />
    <!-- FILM -->
    <h2 v-if="store.films.length">Film</h2>
    <ul>
      <Film
        v-for="film in store.films"
        :imgFilm="film.poster_path"
        :titoloFilm="film.title"
        :titOrigFilm="film.original_title"
        :linguaFilm="film.original_language"
        :votoFilm="film.vote_average"
      />
    </ul>
    <!-- SERIE TV -->
    <h2 v-if="store.series.length">Serie TV</h2>
    <ul>
      <Serie
        v-for="serie in store.series"
        :imgSerie="serie.poster_path"
        :titoloSerie="serie.name"
        :titOrigSerie="serie.original_name"
        :linguaSerie="serie.original_language"
        :votoSerie="serie.vote_average"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
h2 {
  background-color: purple;
}
</style>
