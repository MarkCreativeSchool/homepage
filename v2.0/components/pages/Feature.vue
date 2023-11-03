<template>
  <section id="feature">
    <div class="container">
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5">
          <div class="rare-box"></div>
          <img src="/images/about.jpg" class="about-img-small position-relative w-100" alt="教室の特徴" />
        </div>
        <div class="column is-5">
          <div>
            <h5>教室の<span class="color-blue">特徴</span></h5>
            <h2>
              小学校4年生から始めるつくば市のプログラミングスクール
            </h2>
            <p>
              <span class="color-pink">マインクラフト</span>をベースに<span class="color-pink">競技プログラミング</span>や
              <span class="color-pink">Webアプリケーション</span>などクリエイティブなデジタルコンテンツ制作のお手伝いをしています
            </p>
            <ul>
              <li>小4〜高校生まで幅広い年齢のお子様が通っています</li>
              <li>Pythonなどのプログラミング言語を学習します</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Feature",
}
</script>

<style lang="scss" scoped>
#feature {
  padding: 40px 0;
  h5 {
    font-size: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 32px;
    margin: 12px 0;
  }
  .color-blue {
    color: #84a1d2;
  }
  ul {
    margin-top: 20px;
  }
}
</style>
