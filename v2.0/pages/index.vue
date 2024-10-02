<template>
  <div>
    <Hero />
    <div style="text-align: center; background: #f3f3f3; padding: 40px 0; margin-bottom: 40px;">
      <div style="font-weight: bold; margin-bottom: 20px; font-size: 20px;">
        <div>2024年10月14日</div>
        <div style="font-size: 32px;">
          <b style="color: #FF6F61">マイクラ 1Dayプログラミング</b>
        </div>
      </div>
      <nuxt-link to="/events/2024-10-14" class="button is-large" style="background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%); color: #fff;">
        詳しくはこちら
      </nuxt-link>
    </div>
    <Feature />
    <Quote />
    <Curriculum />
    <Photo />
    <Schedule />
    <Pricing />
    <Contact />
    <Description v-if="false" />
    <Parking />
  </div>
</template>

<script>
import Hero from "~/components/pages/Hero"
import Feature from "~/components/pages/Feature"
import Curriculum from "~/components/pages/Curriculum"
import Quote from "~/components/pages/Quote"
import Photo from "~/components/pages/Photo"
import Schedule from "~/components/pages/Schedule"
import Pricing from "~/components/pages/Pricing"
import Contact from "~/components/pages/Contact"
import Description from "~/components/pages/Description"
import Parking from "~/components/pages/Parking"

export default {
  name: "index",
  components: { Hero, Feature, Pricing, Photo, Schedule, Curriculum, Quote, Contact, Description, Parking }
}
</script>

<style lang="scss" scoped>

</style>