<template>
  <main>
    <Overview />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <About />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <Projects />
  </main>
</template>

<script>
import Overview from "./Overview.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";

export default {
  components: {
    Overview,
    About,
    Projects,
  },
  name: "Main",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
</style>
