<script>
export default {
  name: 'Serie',
  props: ['titoloSerie', 'titOrigSerie', 'linguaSerie', 'votoSerie'],

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
      <h3>{{ titoloSerie }}</h3>
      <h4>{{ titOrigSerie }}</h4>

      <p v-if="linguaSerie === 'it'">
        {{ linguaSerie }}
        <img src="../../public/img/it-flag.jpg" alt="it-flag" />
      </p>
      <p v-else-if="linguaSerie === 'en'">
        {{ linguaSerie }}
        <img src="../../public/img/en-flag.jpg" alt="en-flag" />
      </p>
      <p v-else="linguaSerie === 'en'">
        {{ linguaSerie }}
      </p>

      <p>{{ votoSerie }}</p>
    </div>
  </li>
</template>

<style lang="scss">
img {
  width: 50px;
}
</style>
