<template>
  <main>
    <Overview />
  </main>
</template>

<script>
import Overview from "./Overview.vue";
export default {
  components: {
    Overview,
  },
  name: "Main",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";

main {
}
</style>
