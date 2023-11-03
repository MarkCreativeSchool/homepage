<template>
  <section id="hero" class="p-0 h-100vh cursor-light">
    <div class="hero-content-wrapper h-100vh">
      <div class="decorations">
        <img src="/creative-studio/img/circle-center.png" alt="" class="circle-center" />
        <img src="/creative-studio/img/circle-top-left.png" alt="" class="circle-top-left" />
        <img src="/creative-studio/img/circle-top-right.png" alt="" class="circle-top-right" />
        <Arrows />
        <SliderShape2 />
        <SliderShape3 />
        <SliderShape5 />
        <SliderShape6 />
        <Instagram />
        <Facebook />
        <Twitter />
      </div>
      <div class="hero-content">
        <h1>情報・プログラミング専門スクール</h1>
        <div class="headline">MARK</div>
        <div v-if="false" class="text">
          <div>つくば市のプログラミングスクール</div>
          <div>技術の進歩を止めることはできません。</div>
          <div>できるのはそれに適応することです。</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Arrows from "./decorations/Arrows"
import SliderShape2 from "./decorations/SliderShape2"
import SliderShape3 from "./decorations/SliderShape3"
import SliderShape5 from "./decorations/SliderShape5"
import SliderShape6 from "./decorations/SliderShape6"
import Instagram from "./decorations/Instagram"
import Facebook from "./decorations/Facebook"
import Twitter from "./decorations/Twitter"
export default {
  name: "Hero",
  components: {
    Arrows,
    SliderShape2,
    SliderShape3,
    SliderShape5,
    SliderShape6,
    Instagram,
    Facebook,
    Twitter,
  },
}
</script>

<style lang="scss" scoped>
#hero {
  height: 100vh;
  position: relative;
  box-shadow: #aaa;
  .hero-content-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decorations {
    > * {
      position: absolute;
    }
    .circle-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 440px;
    }
    .circle-top-left {
      top: -200px;
      left: -200px;
      width: 400px;
    }
    .circle-top-right {
      top: -200px;
      right: -200px;
      width: 400px;
    }
  }
  .hero-content {
    position: relative;
    z-index: 30;
    max-width: 640px;
    text-align: center;
    h1 {
      color: rgb(241, 195, 15);
      font-size: 40px;
      font-weight: 700;
    }
    .headline {
      font-size: 70px;
      font-weight: 700;
      color: #000;
      margin: 0 0 20px 0;
    }
  }
  @media screen and (max-width: 767px) {
    .decorations {
      .circle-top-left {
        top: -100px;
        left: -100px;
        width: 200px;
      }
      .circle-top-right {
        top: -100px;
        right: -100px;
        width: 200px;
      }
    }
    .hero-content {
      h1 {
        font-size: 32px;
      }
      .headline {
        font-size: 50px;
      }
    }
  }
}
</style>
