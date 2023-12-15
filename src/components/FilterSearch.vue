<script>
import { store } from '../store';

export default {
  name: 'Search',
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
  <div class="search">
    <form @submit.prevent="$emit('call')">
      <label for="Search">Inserisci il nome del film</label>
      <input type="text" placeholder="nome film" v-model="store.searchKey" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<style lang="scss"></style>
