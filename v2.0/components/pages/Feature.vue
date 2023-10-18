<template>
  <section id="about">
    <div class="container">
      <div class="columns">
        <div v-if="false" class="column is-6">
          <div class="rare-box"></div>
          <img src="/images/about.jpg" class="about-img" alt="教室の特徴" />
        </div>
        <div class="column is-6">
          <div>
            <h2>MARKについて</h2>
          </div>
        </div>
        <div class="column is-6">
          <div class="main-title text-lg-left offset-md-1 mb-0 wow fadeInUp" data-wow-delay="300ms">
            <h2 class="wow fadeInUp font-weight-light" data-wow-delay="400ms">
              MARKの特徴
            </h2>
            <p class="pb-4">プログラミング・情報技術専門のプログラミング教室です。大学の共通試験にも追加されたの情報I以上の本格的な技術が身に付くよう、最先端の技術を研究している講師やIT・プログラミングに特化した講師がレッスンをサポートしています。</p>
            <p class="pb-4 wow fadeInUp" data-wow-delay="500ms">
              <span class="color-pink">マインクラフト</span>・<span class="color-pink">競技プログラミング</span>・
              <span class="color-pink">Webアプリケーション制作</span>を通じてコンピューターリテラシーの学習の機会を提供しています。
            </p>
            <p class="pb-4"></p>
            <p class="pb-4">自社でカリキュラムや学習システムの開発を行っているため、子供たちが無理なく楽しみながら学習ができるようにレッスンを設計しています。</p>
            <p class="pb-4"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
}
</script>

<style lang="scss" scoped>
#about {
  padding: 40px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .about-image {
    width: 75%;
  }
}
</style>
