<template>
  <section id="footer">
    <div class="container">
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

        <div class="foo-right col-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#footer {
  background-color: $blueblack;

  .text {
    color: white;
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
}
</style>
