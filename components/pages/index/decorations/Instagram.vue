<template>
  <div class="rs-looped rs-wave instagram" data-speed="12" data-angle="-90" data-radius="22px" data-origin="-50% -50%">
    <div class="animated-wrap slider-social icon-small">
      <div class="animated-element icon-box-small bg-pink-two instagram-bg-hvr d-flex justify-content-center align-items-center">
        <a class="instagram-text-hvr" href="https://www.instagram.com/mark_creative_school/" target="_blank">
          <i class="fab fa-instagram font-16" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "Instagram",
  mounted() {
    TweenMax.from(".instagram", 2, {
      x: -20,
      ease: "ease",
      yoyo: true,
      repeat: -1,
    })
  },
}
</script>

<style lang="scss" scoped>
.instagram {
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 40px;
  @media screen and (max-width: 767px) {
    bottom: 160px;
    left: 50%;
    width: 40px;
  }
}
</style>
