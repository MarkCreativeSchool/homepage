<template>
  <div class="rs-looped rs-wave twitter" data-speed="19" data-angle="45" data-radius="22px" data-origin="50% 50%">
    <div class="animated-wrap slider-social icon-small">
      <div class="animated-element icon-box-large-two bg-yellow twitter-bg-hvr d-flex justify-content-center align-items-center">
        <a class="twitter-text-hvr" href="https://twitter.com/m_c_school" target="_blank">
          <i class="la la-twitter font-20" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "Twitter",
  props: {
    tween: { type: Boolean, required: false,  default: false },
  },
  mounted() {
    if (!this.tween) {
      TweenMax.from(".twitter", 7, {
        x: -40,
        y: -30,
        z: -40,
        ease: "ease-in",
        yoyo: true,
        repeat: -1,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.twitter {
  position: absolute;
  bottom: 200px;
  left: 80px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  border: solid 5px #1da1f2;
  a {
    color: #1da1f2;
  }
  @media screen and (max-width: 767px) {
    bottom: 160px;
    left: 60px;
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}
</style>
