<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'Element',
  props: ['titolo', 'titOrig', 'overview', 'lingua', 'voto', 'foto', 'id'],

  data() {
    return {
      store,
      maxStars: 5,
      moreInfo: false,
    };
  },

  computed: {
    FullStars() {
      return Math.ceil(this.voto / 2);
    },

    emptyStars() {
      return this.maxStars - this.FullStars;
    },
  },

  methods: {
    showMoreInfo() {
      this.moreInfo = !this.moreInfo;
      console.log('show more info cliked');
      //cast
      axios
        .get(`${store.config.castUrl}${this.id}/credits`, {
          params: {
            api_key: store.config.apiKey,
            language: 'it-IT',
          },
        })
        .then((response) => {
          store.cast = response.data.cast.name;
          console.log(response);
          console.log(`array cast: ${store.cast}`);
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
          this.store.cast = [];
        });
    },
  },
  created() {},
};
</script>

<template>
  <li class="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
    <!-- Copertina -->
    <template v-if="foto !== null">
      <div class="cont-cover">
        <img
          :src="`${store.imgUrlBase}${foto}`"
          :alt="`cover-${titolo}`"
          class="img-fluid"
        />
      </div>
    </template>

    <div v-else class="cont-no-cover">
      <img src="../../public/img/no-image.jpg" alt="" />
    </div>

    <div class="info">
      <!-- Titoli -->
      <h3>{{ titolo }}</h3>
      <span>original title: {{ titOrig }}</span>

      <!--  Overview -->
      <div class="cont-overview">
        <p>{{ overview }}</p>
      </div>

      <!-- Lingua -->
      <div class="cont-lingua" v-if="lingua === 'it'">
        <p>{{ lingua }}</p>
        <div class="cont-flag">
          <img src="../../public/img/it-flag.jpg" alt="it-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else-if="lingua === 'en'">
        <p>{{ lingua }}</p>
        <div class="cont-flag">
          <img src="../../public/img/en-flag.jpg" alt="en-flag" />
        </div>
      </div>

      <div class="cont-lingua" v-else>
        <p>
          {{ lingua }}
        </p>
      </div>

      <!-- Show more -->
      <button @click.stop="showMoreInfo">show more</button>

      <!-- Voto -->
      <div class="cont-voto">
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in FullStars" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in emptyStars" />
      </div>
    </div>

    <!-- show more info -->
    <div class="cont-show-more">
      <div v-for="(actor, index) in store.cast">{{ actor.name }}</div>
      <div></div>
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
    opacity: 1;

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

  .cont-show-more {
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    padding: 5%;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    gap: 10px;
  }
}
</style>
