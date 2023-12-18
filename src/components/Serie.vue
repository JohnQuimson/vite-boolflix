<script>
import { store } from '../store';

export default {
  name: 'Serie',
  props: [
    'titoloSerie',
    'titOrigSerie',
    'overview',
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
  <li class="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
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
      <img src="../../public/img/no-image.jpg" alt="" />
    </div>

    <div class="info">
      <!-- Titoli -->
      <h3>{{ titoloSerie }}</h3>
      <span>original title: {{ titOrigSerie }}</span>

      <!--  Overview -->
      <div class="cont-overview">
        <p>{{ overview }}</p>
      </div>

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  padding: 0;

  &:hover {
    border: 3px solid #dd1a24;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 20px 0px #dd1a24;
    -moz-box-shadow: 0px 0px 20px 0px #dd1a24;
    box-shadow: 0px 0px 20px 0px #dd1a24;
    transform: translate(0, -10px);
    transition: transform 0.5s;
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

/* 
---------------------
CUSTOM SCROLL-BAR
---------------------
*/

/* Larghezza */
::-webkit-scrollbar {
  width: 5px;
}

/* Percorso (in questo caso nascosto) */
::-webkit-scrollbar-track {
  background: none;
}

/* stile scroll-bar */
::-webkit-scrollbar-thumb {
  background-color: rgba(110, 110, 110, 0.8);
  border-radius: 20px;
}

/* Hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
