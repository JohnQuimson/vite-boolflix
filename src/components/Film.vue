<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: ['titoloFilm', 'titOrigFilm', 'linguaFilm', 'votoFilm', 'imgFilm'],

  data() {
    return {
      store,
      maxStarsFilm: 5,
      showInfo: false,
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

  methods: {
    turnCard() {
      this.showInfo = !this.showInfo;
    },
  },
  created() {},
};
</script>

<template>
  <li class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
    <!-- Copertina -->
    <template v-if="imgFilm !== null">
      <div @click="this.turnCard" v-show="!showInfo" class="cont-cover">
        <img
          :src="`${store.imgUrlBase}${imgFilm}`"
          :alt="`cover-${titoloFilm}`"
          class="img-fluid"
        />
      </div>
    </template>

    <div v-else class="cont-no-cover">
      <h2>No cover</h2>
    </div>

    <div v-show="showInfo" class="info">
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
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  border: 1px solid white;

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
}
</style>
