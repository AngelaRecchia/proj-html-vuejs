<template>
  <header>
    <div id="infos"></div>

    <div id="jumbotron">
      <nav></nav>

      <div id="jumbo"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";

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
</style>
