<template>
  <section class="container">
    <div>
      <h1 class="title">MarkCreativeSchool</h1>
      <h2 class="subtitle">
        つくば市のプログラミングスクール
      </h2>
      <div class="links columns is-multiline is-mobile">
        <div class="column is-6-mobile">
          <a href="https://www.instagram.com/mark_creative_school/" target="_blank" class="button">Instagram</a>
        </div>
        <div class="column is-6-mobile">
          <a href="https://www.facebook.com/MarkCreativeSchool" target="_blank" class="button">Facebook</a>
        </div>
        <div class="column">
          <a href="https://twitter.com/m_c_school" target="_blank" class="button">Twitter</a>
        </div>
        <div class="column">
          <a href="" target="_blank" class="button">お問い合わせ</a>
        </div>
      </div>
    </div>
    <div class="address">茨城県つくば市花室983-1 嶋村ビル301</div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "MarkCreativeSchool",
      meta: [
        { hid: "description", name: "description", content: "共通ディスクリプション" },
        { hid: "og:site_name", property: "og:site_name", content: "サイト名" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://example.com" },
        { hid: "og:title", property: "og:title", content: "サイト名" },
        { hid: "og:description", property: "og:description", content: "共通ディスクリプション" },
        { hid: "og:image", property: "og:image", content: "https://example.com/img/ogp/common.jpg" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "sawarabi Mincho", "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: #fff;
  &:first-letter {
    color: #15b0c2;
  }
}

.subtitle {
  font-family: "sawarabi Mincho", sans-serif;
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: #fff;
}

.links {
  .button {
    background: transparent;
    color: #fff;
    border-radius: 0;
    width: 100%;
    padding: 30px;
    &:hover {
      border-color: #15b0c2;
      color: #15b0c2;
    }
  }
}

.address {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

@media (max-width: 640px) {
  .columns {
    padding: 0 30px;
  }
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: 26px;
  }
}
</style>
