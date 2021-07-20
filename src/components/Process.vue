<template>
  <section id="process">
    <div class="small-container text-center">
      <div class="section-name">How it works in practice</div>

      <div class="title blue-black">
        Process
        <span class="highlighted"
          >Management<span class="highlight-grey"></span
        ></span>
      </div>

      <p class="text">
        We work with innovative methodologies to ensure that the entire
        reformatting process is done from start to finish as planned.
      </p>
    </div>

    <div class="line w-100">
      <div id="box-cont" class="row" :class="'row-cols-' + process.length">
        <div class="box" v-for="(elem, index) in process" :key="index">
          <div class="number center-flex">0{{ index + 1 }}</div>
          <h5>{{ elem.title }}</h5>
          <p class="text">{{ elem.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Process from "../data/Process.js";
export default {
  name: "Process",
  data() {
    return {
      process: Process,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#process {
  background-image: url("~@/assets/img/bgProc.png");
  background-attachment: fixed;
  background-size: cover;

  .line {
    margin-top: 60px;
    border-top: 4px solid $llgreen;
  }

  #box-cont {
    width: 80%;
    margin: auto;
    text-align: center;
    transform: translateY(-20px);
  }

  .number {
    color: green;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: $llgreen;
    font-weight: 700;
    font-size: $medium;
    margin: auto;
  }
}
</style>
