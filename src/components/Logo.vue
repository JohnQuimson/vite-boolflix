<script>
export default {
  name: 'Logo',

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <div class="cont-logo">
    <img src="../../public/img/logo/boolflix_logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.cont-logo {
  width: clamp(300px, 30vw, 1000px);
  padding: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
