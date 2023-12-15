<script>
import Film from './Film.vue';
import FilterSearch from './FilterSearch.vue';
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
    FilterSearch,
  },
};
</script>

<template>
  <main>
    <FilterSearch @call="$emit('call')" />
    <ul>
      <Film
        v-for="film in store.films"
        :titolo="film.title"
        :titOrig="film.original_title"
        :lingua="film.original_language"
        :voto="film.vote_average"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
