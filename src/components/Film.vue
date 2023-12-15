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
      <h4>{{ titOrig }}</h4>

      <p v-if="lingua === 'it'">
        {{ lingua }}
        <img src="../../public/img/it-flag.jpg" alt="it-flag" />
      </p>
      <p v-else-if="lingua === 'en'">
        {{ lingua }}
        <img src="../../public/img/en-flag.jpg" alt="en-flag" />
      </p>
      <p v-else="lingua === 'en'">
        {{ lingua }}
      </p>

      <p>{{ voto }}</p>
    </div>
  </li>
</template>

<style lang="scss">
img {
  width: 50px;
}
</style>
