<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: ['titoloFilm', 'titOrigFilm', 'linguaFilm', 'votoFilm', 'imgFilm'],

  data() {
    return {
      store,
      maxStarsFilm: 5,
    };
  },

  computed: {
    FullStarsFilm() {
      return Math.ceil(this.votoFilm / 2);
    },

    emptyStarsFilm() {
      return this.maxStarsFilm - this.FullStarsFilm;
    },
  },

  methods: {},
  created() {},
};
</script>

<template>
  <li>
    <!-- Copertina -->
    <div v-if="imgFilm !== null" class="cont-cover">
      <img
        :src="`${store.imgUrlBase}${imgFilm}`"
        :alt="`cover-${titoloFilm}`"
      />
    </div>

    <div v-else class="cont-no-cover">
      <h2>No cover</h2>
    </div>

    <!-- Titoli -->
    <h3>{{ titoloFilm }}</h3>
    <h4>{{ titOrigFilm }}</h4>

    <!-- Lingua -->
    <div v-if="linguaFilm === 'it'">
      <p>{{ linguaFilm }}</p>
      <div class="cont-flag">
        <img src="../../public/img/it-flag.jpg" alt="it-flag" />
      </div>
    </div>

    <div v-else-if="linguaFilm === 'en'">
      <p>{{ linguaFilm }}</p>
      <div class="cont-flag">
        <img src="../../public/img/en-flag.jpg" alt="en-flag" />
      </div>
    </div>

    <p v-else="linguaFilm === 'en'">
      {{ linguaFilm }}
    </p>
    <!-- Voto -->

    <font-awesome-icon
      icon="fa-solid fa-star"
      v-for="n in this.FullStarsFilm"
    />
    <font-awesome-icon
      icon="fa-regular fa-star"
      v-for="n in this.emptyStarsFilm"
    />
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
