<template>
  <main>
    <Overview />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <About />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <Projects />
    <Process />
  </main>
</template>

<script>
import Overview from "./Overview.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Process from "./Process.vue";

export default {
  components: {
    Overview,
    About,
    Projects,
    Process,
  },
  name: "Main",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
</style>
