<template>
  <section id="overview">
    <div class="container">
      <div class="row row-cols-3">
        <div class="col" v-for="(elem, index) in content" :key="index">
          <Card :content="elem" isCircled="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OverviewData from "../data/OverviewData.js";
import Card from "./Card.vue";

export default {
  name: "Overview",
  components: {
    Card,
  },
  data() {
    return {
      content: OverviewData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#overview {
  background-color: $whitegreen;
}
</style>
