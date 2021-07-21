<template>
  <main>
    <Overview />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <About />
    <div class="dots"><img src="../assets/img/dots.svg" alt="" /></div>
    <Projects />
    <Process />
    <Feedback />
    <News />
  </main>
</template>

<script>
import Overview from "./Overview.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Process from "./Process.vue";
import Feedback from "./Feedback.vue";
import News from "./News.vue";

export default {
  components: {
    Overview,
    About,
    Projects,
    Process,
    Feedback,
    News,
  },
  name: "Main",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
</style>
