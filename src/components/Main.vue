<template>
  <main>
    <Overview />
    <About />
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

main {
}
</style>
