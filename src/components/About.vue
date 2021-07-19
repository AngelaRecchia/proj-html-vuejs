<template>
  <section id="about" class="clearfix w-100">
    <div>
      <div class="container d-flex align-items-center h-100">
        <div class="section-name">About the Company</div>
      </div>
    </div>

    <div id="bg-building" class="h-100"></div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {},
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
#about {
  height: 500px;
  display: flex;

  & > * {
    width: 50%;
  }

  #bg-building {
    background-image: url("../assets/img/about-5.jpg");
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
