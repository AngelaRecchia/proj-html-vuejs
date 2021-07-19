<template>
  <header>
    <div id="infos">
      <div
        class="
          container
          d-flex
          align-items-center
          justify-content-between
          h-100
        "
      >
        <div>
          <a href="#">
            <i class="fas fa-clock"></i>
            Open hours: Mon - Sat - 9:00 - 18:00
          </a>
        </div>

        <div id="contacts">
          <a href="tel:tel">
            <i class="fas fa-phone-alt"></i>
            {{ tel }}
          </a>

          <a href="mailto:email">
            <i class="fas fa-envelope"></i>
            {{ email }}
          </a>

          <a href="#"><i class="fab fa-facebook-f"></i></a>

          <a href="#"><i class="fab fa-twitter"></i></a>

          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <nav :class="{ move: sticked }" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <div id="logo">
          <span id="logo-nex">Nex</span>
          <span id="logo-gen">Gen</span>
        </div>

        <div id="nav-right">
          <ul class="clearfix">
            <li v-for="(elem, index) in navmenu" :key="index" class="mx-3">
              {{ elem.text }}
              <i v-if="elem.submenu" class="fas fa-chevron-down"></i>

              <div v-if="elem.submenu" class="submenu sub1">
                <ul>
                  <li v-for="(sub1elem, index) in elem.submenu" :key="index">
                    <span>{{ sub1elem.text }}</span>

                    <span v-if="sub1elem.text == 'Leverage'" class="blink"
                      ><i class="fas fa-bolt"></i
                    ></span>

                    <span v-if="sub1elem.submenu"
                      ><i class="fas fa-chevron-right"></i
                    ></span>

                    <div v-if="sub1elem.submenu" class="submenu sub2">
                      <ul>
                        <li
                          v-for="(sub2elem, index) in sub1elem.submenu"
                          :key="index"
                        >
                          {{ sub2elem.text }}

                          <span v-if="sub2elem.submenu"
                            ><i class="fas fa-chevron-right"></i
                          ></span>

                          <div v-if="sub2elem.submenu" class="submenu sub3">
                            <ul>
                              <li
                                v-for="(sub3elem, index) in sub2elem.submenu"
                                :key="index"
                              >
                                {{ sub3elem.text }}
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <span class="mx-3">
            <a href="#"><i class="far fa-user"></i></a>
          </span>

          <div class="button-gw mx-3">Get in Touch</div>
        </div>
      </div>
    </nav>

    <div id="jumbotron" class="container d-flex align-items-center">
      <div id="subcont" class="w-50">
        <div class="section-name">Human Resources</div>

        <div class="big-title">
          Get More
          <span class="highlighted"
            >Productivity<span class="highlight-green"></span
          ></span>
        </div>

        <p class="main-description">
          Planning, recruitment and selection process and performance evaluation
          of employees.
        </p>

        <div class="button-gw">Get in Touch</div>

        <div class="button-tlg">Learn More</div>
      </div>
    </div>
  </header>
</template>

<script>
import Navmenu from "../data/Navmenu.js";
import Contacts from "../data/Contacts.js";

export default {
  name: "Header",
  data() {
    return {
      tel: Contacts.tel,
      email: Contacts.email,
      navmenu: Navmenu,
      scrollPosition: 0,
      sticked: false,
    };
  },
  methods: {
    checkScroll() {
      if (this.scrollPosition < window.scrollY) this.sticked = true;
      else if (this.scrollPosition < 50) this.sticked = false;
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.checkScroll);
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
  font-size: $medium;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-image: url("~@/assets/img/jumbo.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.4);
  z-index: -1;
}

#infos {
  color: $lightgrey;
  height: 50px;
  background: linear-gradient(
    90deg,
    rgba(13, 28, 43, 1) 0%,
    rgba(27, 72, 99, 1) 100%
  );

  i {
    margin: 0 3px;
  }
}

#contacts > * {
  margin: 0 10px;
}

.move {
  height: 65px;
  animation: move 0.2s forwards;
  background: linear-gradient(
    90deg,
    rgba(13, 28, 43, 1) 0%,
    rgba(27, 72, 99, 1) 100%
  );
}

nav {
  width: 100%;
  height: 85px;
  color: white;
  font-weight: 500;
  position: fixed;
  top: 50px;

  #nav-right {
    display: flex;
    align-items: center;
  }

  ul {
    margin-bottom: 0;

    li {
      line-height: 40px;
      position: relative;
      float: left;
      text-transform: uppercase;
      display: block;
      z-index: 2;

      &:hover {
        color: $green;
      }

      i {
        margin-left: 5px;
      }

      &:hover {
        .sub1 {
          display: block;
          top: 40px;
        }
      }

      .submenu {
        position: absolute;
        display: none;
        background-color: white;
        color: $darkgrey;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px;

        ul {
          width: 100%;
        }

        li {
          border-left: 4px solid $lightgrey;
          padding: 8px 10px 8px 30px;
          white-space: nowrap;
          line-height: normal;
          text-transform: none;
          margin-left: -37px;
          float: none;
          display: flex;
          justify-content: space-between;

          &:hover {
            border-color: $green;
          }

          &:hover .sub2 {
            display: block;
            top: -5px;
            left: 100%;
          }

          .sub2 li:hover .sub3 {
            display: block;
            top: -5px;
            left: 100%;
          }
        }
      }
    }
  }

  #logo {
    color: $lightgrey;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 600;

    #logo-nex {
      color: $green;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding: 10px 1px 10px 20px;
      background-color: rgba($bluegreen, 0.3);
    }

    #logo-gen {
      color: $lightgrey;
      padding-left: 3px;
    }
  }
}

#jumbotron {
  height: calc(100% - 50px);
  min-height: 500px;
  #subcont > * {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .big-title {
    color: white;
    font-size: 60px;
    font-weight: 900;
    line-height: 70px;
  }

  .main-description {
    color: $lightgrey;
    font-size: 18px;
  }

  .button-gw {
    margin-right: 30px;
  }
}
</style>
