<script>
import { store } from '../store';

export default {
  name: 'Serie',
  props: [
    'titoloSerie',
    'titOrigSerie',
    'linguaSerie',
    'votoSerie',
    'imgSerie',
  ],

  data() {
    return {
      store,
    };
  },

  methods: {},
  created() {},
};
</script>

<template>
  <li>
    <div v-if="imgSerie !== null" class="cont-cover">
      <img
        :src="`${store.imgUrlBase}${imgSerie}`"
        :alt="`cover-${titoloSerie}`"
      />
    </div>
    <div v-else class="cont-no-cover">
      <h2>No cover</h2>
    </div>

    <h3>{{ titoloSerie }}</h3>
    <h4>{{ titOrigSerie }}</h4>

    <p v-if="linguaSerie === 'it'">
      {{ linguaSerie }}
      <div class="cont-flag">
        <img src="../../public/img/it-flag.jpg" alt="it-flag" />
      </div>
    </p>
    <p v-else-if="linguaSerie === 'en'">
      {{ linguaSerie }}
      <div class="cont-flag">
        <img src="../../public/img/en-flag.jpg" alt="en-flag" />
      </div>
    </p>
    <p v-else="linguaSerie === 'en'">
      {{ linguaSerie }}
    </p>

    <p>{{ votoSerie }}</p>
  </li>
</template>

<style lang="scss" scoped>
.cont-cover {
  width: 200px;

  img {
    width: 100%;
  }
}

.cont-flag {
  width: 50px;

  img {
    width: 100%;
  }
}
</style>
