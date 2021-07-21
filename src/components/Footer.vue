<template>
  <footer>
    <div class="container">
      <section id="up-footer">
        <div class="row">
          <div class="foo-left col-8">
            <div class="section-name">Send a message</div>

            <div class="title text-white">
              Get in
              <span class="highlighted"
                >Touch<span class="highlight-green"></span
              ></span>
            </div>

            <p class="text">
              We will respond to your message as soon as possible.
            </p>

            <form class="d-flex justify-content-between flex-wrap">
              <input type="text" id="name" placeholder="Name" />
              <input type="email" id="email" placeholder="Email" />

              <input type="tel" id="tel" placeholder="Phone" />
              <select name="subject" id="subject">
                <option selected>---</option>
                <option value="0">Sales and Purchasing</option>
                <option value="1">Financial and Accounts</option>
                <option value="2">Human Resources</option>
                <option value="3">Another Subject</option>
              </select>

              <textarea name="message" placeholder="Message"></textarea>

              <div class="button-gw">Send</div>
            </form>
          </div>

          <div class="foo-right col-4">
            <h5 class="text-white">Example Inc.</h5>

            <p class="text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p class="text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div
              v-for="(elem, index) in contacts"
              :key="index"
              class="contacts my-4 d-flex align-items-center"
            >
              <span v-if="elem.type == 'tel'" class="icon"
                ><i class="fas fa-phone-alt"></i
              ></span>
              <span v-if="elem.type == 'email'" class="icon"
                ><i class="fas fa-envelope"></i
              ></span>
              <span v-if="elem.type == 'address'" class="icon"
                ><i class="fas fa-map-marker-alt"></i
              ></span>

              {{ elem.value }}
            </div>

            <div class="button-tlg">View map</div>
          </div>
        </div>
      </section>

      <div
        id="down-footer"
        class="text d-flex justify-content-between align-items-center"
      >
        <a href="#">© 2021 NEXGEN is Proudly Powered by Codings.</a>

        <div class="social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>

          <a href="#"><i class="fab fa-twitter"></i></a>

          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Contacts from "../data/Contacts.js";
export default {
  name: "Footer",
  data() {
    return {
      contacts: Contacts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
footer {
  background-color: $blueblack;
  padding-bottom: 20px;

  .text {
    color: $lightgrey;
  }

  form {
    & > * {
      margin: 10px 0;
    }

    .placeholder {
      color: $lightgrey;
    }

    input,
    select,
    textarea {
      background-color: #2d2e33;
      color: $lightgrey;
      border-radius: 5px;
      border: none;
      padding: 10px 20px;

      &:focus {
        outline: none;
      }
    }

    input,
    select {
      width: calc(50% - 10px);
      height: 50px;
    }

    textarea {
      width: 100%;
      min-height: 150px;
    }
  }

  .foo-right {
    padding-left: 5%;

    .contacts {
      color: $green;
      font-weight: 300;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 43px;
        height: 43px;
        background-color: rgba($green, $alpha: 0.3);
        border-radius: 50%;
        margin-right: 15px;
        font-size: 18px;
      }
    }
  }

  .social > * {
    margin: 0 10px;
    font-size: 15px;
  }
}
</style>
