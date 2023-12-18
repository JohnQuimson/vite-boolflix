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
      <label for="Search"></label>
      <input type="text" placeholder="Cerca" v-model="store.searchKey" />
      <button type="submit">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  </div>
</template>

<style lang="scss">
form {
  padding: 20px;
  display: flex;
  gap: 10px;

  input {
    background-color: transparent;
    border: 1px solid rgb(65, 65, 65);
    border-radius: 5px;
    padding-left: 10px;
    color: rgb(165, 165, 165);
  }

  button {
    background-color: #dd1a24;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
  }
}
</style>
