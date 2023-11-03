<template>
  <div class="slider-shape2">
    <img src="/creative-studio/img/slider-shape2.png" alt="" />
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "SliderShape2",
  mounted() {
    TweenMax.from(".slider-shape2", 4, {
      x: -60,
      ease: "ease",
      rotation: "30",
      yoyo: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.slider-shape2 {
  top: 280px;
  right: 200px;
  width: 40px;
  @media screen and (max-width: 767px) {
    top: 240px;
    right: 20px;
    width: 40px;
  }
}
</style>
