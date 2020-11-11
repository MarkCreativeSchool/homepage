<template>
  <div>
    <loading />
    <Header />
    <MainSection />
    <About />
    <AboutBoxes />
    <Team />
    <Quote />
    <WorkStarts />
    <Pricing />
    <Clients />
  </div>
</template>

<script>
import Loading from "../components/pages/index/Loading"
import Header from "../components/pages/index/Header"
import MainSection from "../components/pages/index/MainSection"
import About from "../components/pages/index/About"
import AboutBoxes from "../components/pages/index/AboutBoxes"
import Team from "../components/pages/index/Team"
import Quote from "../components/pages/index/Quote"
import WorkStarts from "../components/pages/index/WorkStarts"
import Pricing from "../components/pages/index/Pricing"
import Clients from "../components/pages/index/Clients"
export default {
  components: { Loading, Header, MainSection, About, AboutBoxes, Team, Quote, WorkStarts, Pricing, Clients },
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
/*
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
 */
</style>
