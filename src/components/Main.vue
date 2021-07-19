<template>
  <main>
    <Overview />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <About />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
  </main>
</template>

<script>
import Overview from "./Overview.vue";
import About from "./About.vue";
export default {
  components: {
    Overview,
    About,
  },
  name: "Main",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
</style>
