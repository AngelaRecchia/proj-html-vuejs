<template>
  <div class="box">
    <img
      class="mainImg"
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
      {{ elem.infos }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: ["elem"],
};
</script>

<style lang="scss" scoped>
@import "@/style/commons.scss";
.box {
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  & > * {
    transition: all 0.6s ease-in-out;
  }

  .mainImg {
    width: 100%;
    border-radius: 10px;
    filter: brightness(0.6);
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
    .mainImg {
      filter: blur(2px) brightness(0.4);
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
</style>
