<template>
  <div>
    <loading />
    <Header />
    <Hero />
    <!--
    <MainSection />
    -->
    <About />
    <AboutBoxes />
    <!--
    <Team />
    -->
    <Quote />
    <WorkStarts />
    <Pricing />
    <Covid />
    <!--
    <Clients />
    -->
    <!--
    <Blog />
    -->
    <Contact />
  </div>
</template>

<script>
import Loading from "../components/pages/index/Loading"
import Header from "../components/pages/index/Header"
import Hero from "../components/pages/index/Hero"
import About from "../components/pages/index/About"
import AboutBoxes from "../components/pages/index/AboutBoxes"
import Quote from "../components/pages/index/Quote"
import WorkStarts from "../components/pages/index/WorkStarts"
import Pricing from "../components/pages/index/Pricing"
import Covid from "../components/pages/index/Covid"
import Contact from "../components/pages/index/Contact"
// import MainSection from "../components/pages/index/MainSection"
// import Team from "../components/pages/index/Team"
// import Clients from "../components/pages/index/Clients"
// import Blog from "../components/pages/index/Blog"
export default {
  components: {
    Loading,
    Header,
    Hero,
    // MainSection,
    About,
    AboutBoxes,
    // Team,
    Quote,
    WorkStarts,
    Pricing,
    // Clients,
    // Blog,
    Covid,
    Contact,
  },
  head() {
    return {
      title: "MarkCreativeSchool - つくば市のプログラミングスクール",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "つくば市のプログラミングスクール。主にMineCraftを使って、Lua・Python・Javaなどでゲームを作りながらプログラミングを学びます / 毎週月水土 / 授業料: 週1-6,000円(税込) 週2-10,000円(税込) / 無料体験随時募集中！！",
        },
        { hid: "og:site_name", property: "og:site_name", content: "MarkCreativeSchool - つくば市のプログラミングスクール" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://www.mark-cs.com" },
        { hid: "og:title", property: "og:title", content: "MarkCreativeSchool - つくば市のプログラミングスクール" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "つくば市のプログラミングスクール。主にMineCraftを使って、Lua・Python・Javaなどでゲームを作りながらプログラミングを学びます / 毎週月水土 / 授業料: 週1-6,000円(税込) 週2-10,000円(税込) / 無料体験随時募集中！！",
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

<style lang="scss" scoped></style>
