<template>
  <div class="arrows">
    <img src="/creative-studio/img/arrows.png" alt="" />
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "Arrows",
  mounted() {
    TweenMax.from(".arrows", 4, {
      x: -40,
      ease: "ease",
      yoyo: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.arrows {
  position: absolute;
  top: 160px;
  left: 160px;
  width: 60px;
  @media screen and (max-width: 767px) {
    top: 40px;
    left: 40px;
    width: 60px;
  }
}
</style>
