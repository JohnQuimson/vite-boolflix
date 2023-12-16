<script>
import { store } from '../store';

export default {
  name: 'Film',
  props: ['titoloFilm', 'titOrigFilm', 'linguaFilm', 'votoFilm', 'imgFilm'],

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
      <!-- Copertina -->
      <div v-if="imgFilm !== null" class="cont-cover">
      <img 
        :src="`${store.imgUrlBase}${imgFilm}`" 
        :alt="`cover-${titoloFilm}`">
    </div>
    <div v-else class="cont-no-cover">
      <h2>No cover</h2>
    </div>

      <!-- Titoli -->
      <h3>{{ titoloFilm }}</h3>
      <h4>{{ titOrigFilm }}</h4>

      <!-- Lingua -->
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

      <!-- Voto -->
      <p>{{ votoFilm }}</p>
  </li>
</template>

<style lang="scss" scoped>
.cont-cover{
  width: 200px;
  
  img{
    width: 100%;
  }
}

.cont-flag {
  width: 50px;

  img{
    width: 100%;
  }
}
</style>
