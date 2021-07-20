<template>
  <section id="feedback">
    <div class="small-container mb-5">
      <div class="section-name">Customer Testimonials</div>

      <div class="title blue-black">
        Trusted
        <span class="highlighted"
          >Feedback<span class="highlight-green"></span
        ></span>
      </div>

      <p class="text">
        We work intensively in search of ideals that can add up in the lives of
        our customers. This is what moves us and we are grateful for the
        recognition.
      </p>
    </div>

    <div class="container">
      <div class="row row-cols-3">
        <div class="col" v-for="(elem, index) in content" :key="index">
          <Card :content="elem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Feedback from "../data/Feedback.js";
import Card from "./Card.vue";

export default {
  name: "Feedback",
  components: {
    Card,
  },
  data() {
    return {
      content: Feedback,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#feedback {
  background-color: $whitegreen;
}
</style>
