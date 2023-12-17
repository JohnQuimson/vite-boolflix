<script>
import Search from './Search.vue';
import Logo from './Logo.vue';

export default {
  name: 'Main',

  data() {
    return {};
  },

  components: {
    Search,
    Logo,
  },
};
</script>

<template>
  <header>
    <Logo />
    <Search @call="$emit('call')" />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
