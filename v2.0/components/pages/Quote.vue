<template>
  <section id="dots" class="parallax-setting parallaxie parallax1">
    <div class="container">
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div class="quote"><i class="la la-quote-left"></i></div>
          <h2><span class="color-yellow">技術の進歩</span>を止めることはできません。 できるのはそれに適応することです。</h2>
          <h3 class="color-pink">MARK</h3>
          <div class="quote is-right"><i class="la la-quote-right"></i></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Quote",
}
</script>

<style lang="scss" scoped>
#dots {
  padding: 20px 0;
  background-image: url("/images/dots.png");
  .color-yellow {
    color: #f1c30f;
  }
  h2 {
    font-size: 48px;
    text-align: center;
  }
  h3 {
    font-size: 40px;
    text-align: center;
  }
  .quote {
    font-size: 32px;
    &.is-right {
      text-align: right;
    }
  }
}
</style>
