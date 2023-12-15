<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: ['titolo', 'titOrig', 'lingua', 'voto'],

  data() {
    return {
      // store,
    };
  },

  methods: {},
  created() {},
};
</script>

<template>
  <li>
    <div>
      <h3>{{ titolo }}</h3>
      <h4>titolo originale</h4>
      <p>lingua</p>
      <p>voto</p>
    </div>
  </li>
</template>

<style lang="scss"></style>
