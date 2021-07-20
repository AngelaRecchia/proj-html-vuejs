<template>
  <div id="card">
    <div v-if="isCircled" class="circled center-flex">
      <img :src="content.img" :alt="content.title" />
    </div>

    <div v-else>
      <img
        class="center-flex feed-logo"
        :src="require('../assets/img/' + content.img)"
        :alt="content.name"
      />
    </div>

    <h5 v-if="content.title" class="blue-black">{{ content.title }}</h5>

    <div class="text">
      <div>{{ content.text }}</div>

      <div v-if="content.author" class="author">
        {{ content.author }}

        <div class="quote">
          <img
            src="https://api.iconify.design/bx:bxs-quote-right.svg"
            alt="quote"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["content", "isCircled"],
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#card {
  border-radius: 10px;
  background-color: #fff;
  padding: 30px;
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    z-index: 0;
  }
}

.circled {
  width: 50px;
  height: 50px;

  img {
    width: 25px;
    filter: invert(39%) sepia(100%) saturate(4719%) hue-rotate(163deg)
      brightness(88%) contrast(96%);
  }
}

.feed-logo {
  height: 20px;
  margin-bottom: 15px;
}

.author {
  margin-top: 10px;
  font-size: 11px;
  font-style: italic;
}

.quote {
  position: absolute;
  bottom: 15px;
  right: 15px;
  img {
    width: 30px;
    filter: invert(92%) sepia(7%) saturate(77%) hue-rotate(148deg)
      brightness(82%) contrast(89%);
  }
}
</style>
