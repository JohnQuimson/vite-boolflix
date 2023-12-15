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
    <FilterSearch @call="$emit('search')" />
    <ul>
      <Film
        v-for="film in store.films"
        :titolo="film.titolo"
        :titOrig="film.titOrig"
        :lingua="film.lingua"
        :voto="film.voto"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
