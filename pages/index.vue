<template>
  <div class="wrapper">
    <div class="bg black">
      <section class="container">
        <div>
          <h1 class="title">MarkCreativeSchool</h1>
          <h2 class="subtitle">
            つくば市のプログラミングスクール
          </h2>
          <div class="catch">
            <div>技術の進歩を止めることはできません。</div>
            <div>できるのはそれに適応することです。</div>
          </div>
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
          </div>
          <div style="font-size: 20px;margin-top: 30px;">
            <div>お知らせ</div>
            <div>4/18〜5/20までコロナ対策のため教室でのレッスンは休校といたします</div>
            <div>6月以降のスケジュールは個別でご連絡対応しております。</div>
          </div>
        </div>
        <div class="company">MARK Inc.</div>
        <div class="tel">029-875-7647 / markcreativeschool@gmail.com</div>
        <div class="address">茨城県つくば市花室983-1 嶋村ビル301.</div>
      </section>
    </div>
    <div class="bg gray">
      <section class="containerB">
        <h2 class="guide">生徒募集中</h2>
        <div class="columns">
          <div class="column">
            <h3>開講日</h3>
            <div>月曜日 : 16:30 〜 19:00</div>
            <div>水曜日 : 16:30 〜 19:00</div>
            <div>土曜日 : 14:00 〜 16:15</div>
          </div>
          <div class="column">
            <h3>受講料金</h3>
            <div>1時間(月4回) / 5,500円(税込)</div>
            <div>2時間(月4回) / 8,500円(税込)</div>
            <div>小4〜 / 中学生・高校生も歓迎</div>
            <div>月に受講いただく回数は4回です。1時間か2時間でお選びください</div>
          </div>
          <div class="column">
            <h3>内容</h3>
            <p>マインクラフトを使ったプログラミングの学習</p>
            <p>マインクラフトのマルチサーバーの運営</p>
            <p>Python/JavaScriptなどのプログラミングの学習</p>
            <p>他、子供達が興味を示すこと</p>
          </div>
        </div>
        <div class="today">※{{ today() }} 現在</div>
        <h2 class="guide">授業内容</h2>
        <div class="columns">
          <div class="column is-12">
            <p>MarkCreativeSchoolでは自発的なアイデアを尊重しています。</p>
            <p>机に座って先生が生徒に一方的に教えるということはせず</p>
            <p>自分たちでアイデアを出し、プログラムを使って"形"にする手助けをしてします。</p>
          </div>
        </div>
      </section>
    </div>
    <div class="bg black">
      <section class="container">
        <div>
          <h1 class="title">無料体験</h1>
          <h2 class="subtitle">随時募集中です。お気軽にお電話ください。</h2>
          <div class="links columns is-multiline is-mobile">
            <div class="column">
              <a href="tel:029-875-7647" target="_blank" class="button">電話をかける</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "MarkCreativeSchool - つくば市のプログラミングスクール",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "つくば市のプログラミングスクール。主にMineCraftを使って、Lua・Python・Javaなどでゲームを作りながらプログラミングを学びます / 毎週月水土 / 授業料: 週1-5,500円(税込) 週2-8,500円(税込) / 無料体験随時募集中！！",
        },
        { hid: "og:site_name", property: "og:site_name", content: "MarkCreativeSchool - つくば市のプログラミングスクール" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://www.mark-cs.com" },
        { hid: "og:title", property: "og:title", content: "MarkCreativeSchool - つくば市のプログラミングスクール" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "つくば市のプログラミングスクール。主にMineCraftを使って、Lua・Python・Javaなどでゲームを作りながらプログラミングを学びます / 毎週月水土 / 授業料: 週1-5,500円(税込) 週2-8,500円(税込) / 無料体験随時募集中！！",
        },
        { hid: "og:image", property: "og:image", content: "https://example.com/img/ogp/common.jpg" },
      ],
    }
  },
  methods: {
    today: function() {
      const dt = new Date()
      const y = dt.getFullYear()
      const m = ("00" + (dt.getMonth() + 1)).slice(-2)
      const d = ("00" + dt.getDate()).slice(-2)
      const result = y + "/" + m + "/" + d
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.bg {
  &.black {
    background: #000;
  }
  &.gray {
    background: #181818;
  }
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.containerB {
  margin: 0 auto;
  max-width: 1344px;
  min-height: 100vh;
  padding: 30px;
  .guide {
    font-family: "sawarabi Mincho", "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    font-size: 36px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .columns {
    .column {
      h3 {
        font-size: 24px;
        margin-bottom: 10px;
        border-left: solid 5px #aaa;
        line-height: 1;
        padding-left: 15px;
      }
    }
  }
  .today {
    margin-bottom: 60px;
  }
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

.catch {
  margin-bottom: 3rem;
  font-size: 24px;
  div {
    display: inline-block;
  }
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

.company {
  position: fixed;
  right: 30px;
  bottom: 70px;
  font-size: 24px;
  font-weight: bold;
}
.tel {
  position: fixed;
  right: 30px;
  bottom: 50px;
}
.address {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

@media (max-width: 640px) {
  .wrapper {
    width: 100%;
    overflow-x: hidden;
  }
  .container {
    // display: block;
    // margin-top: 45px;
    .columns {
      padding: 0 30px;
    }
  }
  .title {
    font-size: 36px;
  }
  .subtitle {
    font-size: 20px;
  }
  .catch {
    font-size: 18px;
  }
  .links {
    padding: 0 30px;
  }
}
</style>
