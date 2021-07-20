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

      <div id="types" class="my-4">
        <div
          id="type"
          class="text"
          v-for="(elem, index) in types"
          :key="index"
          @click.prevent="select(index)"
          :class="{ selected: isSelected == index }"
        >
          {{ elem }}
        </div>
      </div>

      <transition-group name="inOut" class="row row-cols-3 gy-4 inOutGroup">
        <div
          v-for="(elem, index) in projects"
          :key="index"
          class="box col inOutItem"
          v-show="filter(elem.type)"
        >
          <img
            class="projImg"
            :src="require('../assets/img/' + elem.img)"
            :alt="elem.name"
          />
          <h5 class="name text-white">{{ elem.name }}</h5>

          <p class="infos fromTop">
            <span>
              <img
                src="https://api.iconify.design/simple-line-icons:user.svg"
                alt="icon user"
              />
              Codings
            </span>

            <span>
              <img
                src="https://api.iconify.design/simple-line-icons:clock.svg"
                alt="icon clock"
              />
              4 Months
            </span>
          </p>

          <p class="infos fromBottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </transition-group>
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
      isSelected: 0,
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
  methods: {
    select(type) {
      this.isSelected = type;
    },

    filter(elem) {
      if (this.isSelected == 0) return true;

      if (elem.includes(this.types[this.isSelected])) return true;
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#projects {
  background-color: $blueblack;

  .inOutGroup {
    overflow: hidden;
    backface-visibility: hidden;
    z-index: 1;
  }

  .inOut {
    position: relative;
    backface-visibility: hidden;
    z-index: 1;
  }

  .inOut-move {
    transition: all 600ms ease-in-out 50ms;
  }

  .inOut-enter-active {
    transition: all 300ms ease-out;
  }

  .inOut-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  .inOut-enter,
  .inOut-leave-to {
    opacity: 0;
  }

  .inOut-enter {
    transform: scale(0.9);
  }

  .box {
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    & > * {
      transition: all 0.6s ease-in-out;
    }

    .projImg {
      width: 100%;
      border-radius: 10px;
      opacity: 0.5;
    }
    .name {
      position: absolute;
      bottom: 7%;
      width: 78%;
    }

    .infos {
      position: absolute;
      width: 78%;
      color: $lightgrey;
      font-size: 15px;

      span {
        margin: 0 5px;
      }

      img {
        width: 20px;
        filter: invert(92%) sepia(7%) saturate(77%) hue-rotate(148deg)
          brightness(82%) contrast(89%);
      }
    }

    .fromBottom {
      bottom: -30%;
    }

    .fromTop {
      text-align: center;
      top: -30%;
    }

    &:hover {
      .projImg {
        filter: blur(2px);
        opacity: 0.4;
      }

      .name {
        bottom: 20%;
      }

      .fromBottom {
        bottom: 5%;
      }

      .fromTop {
        top: 5%;
      }
    }
  }

  #types {
    display: flex;
    justify-content: space-evenly;

    #type {
      text-transform: uppercase;
      padding: 10px 15px;
      border-radius: 5px;
      color: $lightgrey;
      font-weight: 500;
      cursor: pointer;
    }

    .selected {
      background-color: rgba($color: $green, $alpha: 0.2);
    }
  }
}
</style>
