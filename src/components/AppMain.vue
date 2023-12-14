<script>
export default {
  name: 'Main',
  components: {},
};
</script>

<template>
  <form>
    <label for="filmName">Inserisci il nome del film</label>
    <input type="text" placeholder="nome film" v-model="searchKey" />
    <button type="submit">submit</button>
  </form>
</template>

<style lang="scss" scoped></style>
