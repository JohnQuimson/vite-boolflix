<script>
import Search from './Search.vue';
import Logo from './Logo.vue';
import { store } from '../store';


export default {
  name: 'Main',

  data() {
    return {
      store
    };
  },

  components: {
    Search,
    Logo,
  },
};
</script>

<template>
  <header v-if="store.films.length == []">
    
  </header>
  <header v-else>
    <Logo class="header-logo"/>
    <Search @call="$emit('call')" />
  </header>
  
</template>

<style lang="scss" scoped>
header {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(20, 20, 20, 1) 80%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  .header-logo{
    width: 10%;
  }
}
</style>
