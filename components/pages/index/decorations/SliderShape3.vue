<template>
  <img src="creative-studio/img/slider-shape3.png" alt="" class="slider-shape3" />
</template>

<script>
import { TweenMax, Linear } from "gsap"
export default {
  name: "SliderShape3",
  mounted() {
    TweenMax.to(".decorations .slider-shape3", 20, {
      rotation: "720",
      ease: Linear.easeNone,
      yoyoEase: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.slider-shape3 {
  top: 220px;
  left: calc(50% - 200px);
  width: 40px;
  @media screen and (max-width: 767px) {
    top: 200px;
    left: 100px;
    width: 40px;
  }
}
</style>
