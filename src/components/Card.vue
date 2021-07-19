<template>
  <div id="card">
    <div v-if="circled" class="circled center-flex">
      <img :src="content.img" :alt="content.title" />
    </div>

    <h5>{{ content.title }}</h5>

    <p>{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["content", "circled"],
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

  &:hover {
    transform: translateY(-8px);
    z-index: 0;
  }

  h5 {
    font-weight: 700;
    margin: 20px 0;
  }

  p {
    color: $darkgrey;
    font-size: $medium;
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
</style>
