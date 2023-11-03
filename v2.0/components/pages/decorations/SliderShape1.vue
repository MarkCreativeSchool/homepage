<template>
  <img src="creative-studio/img/slider-shape1.png" alt="" class="slider-shape1" />
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "SliderShape1",
  mounted() {
    TweenMax.from(".slider-shape1", 7, {
      x: -40,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.slider-shape1 {
  top: 160px;
  right: 160px;
  width: 40px;
  @media screen and (max-width: 767px) {
    top: 240px;
    right: 20px;
    width: 40px;
  }
}
</style>
