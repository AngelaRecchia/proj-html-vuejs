<template>
  <section id="about" class="clearfix w-100">
    <div class="w-50">
      <div class="container">
        <div class="section-name">About the Network</div>

        <div class="title blue-black">
          The
          <span class="highlighted"
            >Company<span class="highlight-grey"></span
          ></span>
        </div>

        <p class="text">
          For 12 years we have been providing audit and warranty, financial
          advice, risk advice, taxes and related services to select clients.
        </p>

        <div class="row row-cols-2 my-4">
          <div class="box" v-for="(elem, index) in about" :key="index">
            <div class="count">{{ elem.count }}</div>
            <h5 class="blue-black my-2">{{ elem.title }}</h5>
            <p class="text">{{ elem.text }}</p>
          </div>
        </div>

        <div class="button-gw me-4">Get in Touch</div>

        <div class="button-tg">Learn More</div>
      </div>
    </div>
  </section>
</template>

<script>
import About from "../data/About.js";
export default {
  name: "About",
  data() {
    return {
      about: About,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#about {
  background-image: url(https://nexgen.codings.dev/wp-content/uploads/2021/03/about-5.jpg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-attachment: fixed;

  & > * {
    width: 50%;
  }

  .count {
    font-size: 35px;
    font-weight: 700;
    color: $lightgreen;
  }
}
</style>
