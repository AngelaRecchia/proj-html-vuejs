<template>
  <section id="news">
    <div class="container">
      <div class="section-name">Our editorial content</div>

      <div class="title blue-black">
        Latest
        <span class="highlighted"
          >News<span class="highlight-grey"></span
        ></span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text"
          >Every week we publish content about what is best in the business
          world.</span
        >

        <div class="button-gw">See all</div>
      </div>

      <carousel
        :per-page="3"
        loop="true"
        paginationActiveColor="#058283"
        paginationColor="#BABDBE"
        class="mt-4"
      >
        <slide v-for="elem in news" :key="elem.name">
          <Box :elem="elem" class="m-2" />
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import News from "../data/News.js";
import Box from "./Box.vue";
export default {
  name: "News",
  components: {
    Carousel,
    Slide,
    Box,
  },
  data() {
    return {
      news: News,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#news {
  background-color: $llgreen;
}
</style>
