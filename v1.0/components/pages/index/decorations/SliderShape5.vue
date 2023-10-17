<template>
  <img src="creative-studio/img/slider-shape5.png" alt="" class="slider-shape5" />
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "SliderShape5",
  mounted() {
    TweenMax.from(".slider-shape5", 4, {
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
.slider-shape5 {
  bottom: 80px;
  left: 100px;
  width: 40px;
  @media screen and (max-width: 767px) {
    display: none;
    bottom: 80px;
    left: 40px;
    width: 40px;
  }
}
</style>
