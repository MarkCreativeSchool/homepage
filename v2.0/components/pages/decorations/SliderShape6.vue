<template>
  <div class="slider-shape6">
    <img src="/creative-studio/img/slider-shape6.png" alt="" />
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "SliderShape6",
  mounted() {
    TweenMax.from(".decorations .slider-shape6", 7, {
      x: -40,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.slider-shape6 {
  top: 160px;
  right: 160px;
  width: 40px;
  @media screen and (max-width: 767px) {
    top: 50px;
    right: 60px;
    width: 40px;
  }
}
</style>
