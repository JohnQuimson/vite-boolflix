<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: ['titoloFilm', 'titOrigFilm', 'linguaFilm', 'votoFilm', 'imgFilm'],

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
      <div class="cont-cover">
        <img :src="`https://image.tmdb.org/t/p/w342${imgFilm}`" alt="img-cover" />
      </div>

      <h3>{{ titoloFilm }}</h3>
      <h4>{{ titOrigFilm }}</h4>

      <p v-if="linguaFilm === 'it'">
        {{ linguaFilm }}
        <div class="cont-flag">
          <img src="../../public/img/it-flag.jpg" alt="it-flag" />
        </div>
      </p>
      <p v-else-if="linguaFilm === 'en'">
        {{ linguaFilm }}
        <div class="cont-flag">
          <img src="../../public/img/en-flag.jpg" alt="en-flag" />
        </div>
      </p>
      <p v-else="linguaFilm === 'en'">
        {{ linguaFilm }}
      </p>

      <p>{{ votoFilm }}</p>
    </div>
  </li>
</template>

<style lang="scss">
.cont-cover{
  width: 200px;
  
  img{
    width: 100%;
  }
}

.cont-flag {
  width: 50px;
}
</style>
