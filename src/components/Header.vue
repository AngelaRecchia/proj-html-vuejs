<template>
  <header>
    <div id="infos">
      <div class="container"></div>
    </div>

    <div id="jumbotron" class="container">
      <nav>
        <div id="logo">
          <span>Nex</span>
          <span>Gen</span>
        </div>

        <div id="right">
          <ul>
            <li v-for="(elem, index) in navmenu" :key="index" class="mx-3">
              {{ elem.title }}
            </li>
          </ul>

          <span class="mx-3"><i class="far fa-user"></i></span>

          <div class="button mx-3">Get in Touch</div>
        </div>
      </nav>

      <div id="jumbo"></div>
    </div>
  </header>
</template>

<script>
import Navmenu from "../data/Navmenu.js";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      navmenu: Navmenu,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
@import "../style/mixins.scss";
@import "../style/vars.scss";

header {
  height: 100vh;
  position: relative;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/jumbo.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.4);
  z-index: -1;
}

#infos {
  height: 50px;
  background: rgb(13, 28, 43);
  background: linear-gradient(
    90deg,
    rgba(13, 28, 43, 1) 0%,
    rgba(27, 72, 99, 1) 100%
  );
}

nav {
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  font-weight: 500;

  #right {
    display: flex;
    align-items: center;
    font-size: $medium;
  }

  ul {
    margin-bottom: 0;

    li {
      display: inline;
    }
  }

  .button {
    @include button($green, white);
  }

  #logo {
    color: $lightgrey;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 600;
  }
}
</style>
