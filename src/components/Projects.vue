<template>
  <section id="projects">
    <div class="container text-center">
      <span class="section-name">We do more for everyone</span>

      <div class="title text-white">
        Actions &#38;
        <span class="highlighted"
          >Projects<span class="highlight-green"></span
        ></span>
      </div>

      <div id="types" v-for="(elem, index) in types" :key="index">
        {{ elem }}
      </div>

      <div class="row row-cols-3 gy-4">
        <div v-for="(elem, index) in projects" :key="index" class="box col">
          <img :src="require('../assets/img/' + elem.img)" :alt="elem.name" />
          <h5 class="name text-white">{{ elem.name }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Projects from "../data/Projects.js";
export default {
  name: "Projects",
  data() {
    return {
      projects: Projects,
    };
  },
  computed: {
    types() {
      let types = ["all"];
      for (const elem of this.projects) {
        for (const type of elem.type) {
          if (!types.includes(type)) types.push(type);
        }
      }

      return types;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#projects {
  background-color: $blueblack;

  .box {
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      border-radius: 10px;
      opacity: 0.5;
    }

    .name {
      position: absolute;
      bottom: 7%;
      width: 78%;
    }
  }
}
</style>
