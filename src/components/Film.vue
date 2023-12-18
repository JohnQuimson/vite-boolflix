<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: [
    'titoloFilm',
    'titOrigFilm',
    'overview',
    'linguaFilm',
    'votoFilm',
    'imgFilm',
  ],

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

<!-- class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-2" -->
<template>
  <li class="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
    <!-- Copertina -->
    <template v-if="imgFilm !== null">
      <div class="cont-cover">
        <img
          :src="`${store.imgUrlBase}${imgFilm}`"
          :alt="`cover-${titoloFilm}`"
          class="img-fluid"
        />
      </div>
    </template>

    <div v-else class="cont-no-cover">
      <img src="../../public/img/no-image.jpg" alt="" />
    </div>

    <div class="info">
      <!-- Titoli -->
      <h3>{{ titoloFilm }}</h3>
      <span>original title: {{ titOrigFilm }}</span>

      <!--  Overview -->
      <div class="cont-overview">
        <p>{{ overview }}</p>
      </div>

      <!-- Lingua -->
      <div class="cont-lingua" v-if="linguaFilm === 'it'">
        <p>{{ linguaFilm }}</p>
        <div class="cont-flag">
          <img src="../../public/img/it-flag.jpg" alt="it-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else-if="linguaFilm === 'en'">
        <p>{{ linguaFilm }}</p>
        <div class="cont-flag">
          <img src="../../public/img/en-flag.jpg" alt="en-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else>
        <p>
          {{ linguaFilm }}
        </p>
      </div>

      <!-- Voto -->
      <div class="cont-voto">
        <font-awesome-icon
          icon="fa-solid fa-star"
          v-for="n in this.FullStarsFilm"
        />
        <font-awesome-icon
          icon="fa-regular fa-star"
          v-for="n in this.emptyStarsFilm"
        />
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  padding: 0;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }

  &:hover .cont-cover,
  &:hover .cont-no-cover {
    opacity: 0.1;
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
      height: 100%;
      object-fit: cover;
    }
  }

  .cont-no-cover {
    opacity: 0.1;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  // titoli
  h3 {
    font-size: 20px;
  }

  span {
    color: grey;
    font-size: 14px;
  }

  // overview
  .cont-overview {
    overflow-y: scroll;
    max-height: 50%;
    border: 1px solid rgb(58, 58, 58);
    border-radius: 10px;
    padding: 5px;

    p {
      font-size: 14px;
    }
  }

  // lingua
  .cont-lingua {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

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
    color: rgb(231, 198, 6);
    font-size: 20px;
  }
}
</style>
