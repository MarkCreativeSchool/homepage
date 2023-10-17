<template>
  <div class="rs-looped rs-slideloop facebook" data-easing="Power0.easeInOut" data-speed="12" data-xs="0" data-xe="0" data-ys="-10" data-ye="60">
    <div class="animated-wrap slider-social icon-small">
      <div class="animated-element icon-box-large bg-pink facebook-bg-hvr d-flex justify-content-center align-items-center">
        <a class="facebook-text-hvr" href="https://www.facebook.com/MarkCreativeSchool/" target="_blank">
          <i class="fab fa-facebook-f font-20" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "Facebook",
  props: {
    tween: { type: Boolean, required: false,  default: false },
  },
  mounted() {
    if (!this.tween) {
      TweenMax.from(".facebook", 3, {
        x: 5,
        y: -20,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.facebook {
  position: absolute;
  bottom: 260px;
  right: 120px;
  width: 40px;
  @media screen and (max-width: 767px) {
    bottom: 180px;
    right: 60px;
    width: 40px;
  }
}
</style>
