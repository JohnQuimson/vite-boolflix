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
      maxStarsSerie: 5,
    };
  },

  computed: {
    FullStarsSerie() {
      return Math.ceil(this.votoSerie / 2);
    },

    emptyStarsSerie() {
      return this.maxStarsSerie - this.FullStarsSerie;
    },
  },

  methods: {},
  created() {},
};
</script>

<template>
  <li class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
    <!-- Copertina -->
    <template v-if="imgSerie !== null">
      <div class="cont-cover">
        <img
          :src="`${store.imgUrlBase}${imgSerie}`"
          :alt="`cover-${titoloSerie}`"
          class="img-fluid"
        />
      </div>
    </template>

    <div v-else class="cont-no-cover">
      <h2>No cover</h2>
    </div>

    <div class="info">
      <!-- Titoli -->
      <h3>{{ titoloSerie }}</h3>
      <span>original title: {{ titOrigSerie }}</span>

      <!-- Lingua -->
      <div class="cont-lingua" v-if="linguaSerie === 'it'">
        <p>{{ linguaSerie }}</p>
        <div class="cont-flag">
          <img src="../../public/img/it-flag.jpg" alt="it-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else-if="linguaSerie === 'en'">
        <p>{{ linguaSerie }}</p>
        <div class="cont-flag">
          <img src="../../public/img/en-flag.jpg" alt="en-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else>
        <p>
          {{ linguaSerie }}
        </p>
      </div>

      <!-- Voto -->
      <div class="cont-voto">
        <font-awesome-icon
          icon="fa-solid fa-star"
          v-for="n in this.FullStarsSerie"
        />
        <font-awesome-icon
          icon="fa-regular fa-star"
          v-for="n in this.emptyStarsSerie"
        />
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 30px;

  &:hover .cont-cover {
    opacity: 0;
  }

  &:hover .info {
    opacity: 1;
  }
  // copertina
  .cont-cover {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .info {
    position: absolute;
    opacity: 0;
  }

  // titoli
  h3 {
    margin-top: 30%;
  }
  span {
    color: grey;
    font-size: 14px;
  }

  // lingua
  .cont-lingua {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    p {
      margin: 0;
      text-transform: uppercase;
    }

    .cont-flag {
      width: 30px;

      img {
        width: 100%;
      }
    }
  }

  // voto
  .cont-voto {
    margin-top: 20px;
    color: rgb(231, 198, 6);
    font-size: 20px;
  }
}
</style>
