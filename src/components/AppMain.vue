<script>
import Element from './Element.vue';
import { store } from '../store';

export default {
  name: 'Main',

  data() {
    return {
      store,
    };
  },

  components: {
    Element,
  },
};
</script>

<template>
  <main v-if="store.films.length">
    <!-- FILM -->
    <h2 v-if="store.films.length">Film</h2>
    <ul class="row">
      <Element
        v-for="film in store.films"
        :foto="film.poster_path"
        :titolo="film.title"
        :titOrig="film.original_title"
        :overview="film.overview"
        :lingua="film.original_language"
        :voto="film.vote_average"
      />
    </ul>
    <!-- SERIE TV -->
    <h2 v-if="store.series.length">Serie TV</h2>
    <ul class="row">
      <Element
        v-for="serie in store.series"
        :foto="serie.poster_path"
        :titolo="serie.name"
        :titOrig="serie.original_name"
        :overview="serie.overview"
        :lingua="serie.original_language"
        :voto="serie.vote_average"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 100px;
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
    justify-content: start;
    column-gap: 30px;
    row-gap: 20px;
    height: 500px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 30px 20px 20px 20px;
  }
}
</style>
