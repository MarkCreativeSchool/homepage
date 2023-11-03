<template>
  <div>
    <Hero />
    <Feature />
    <Quote />
    <Curriculum />
    <Photo />
    <Schedule />
    <Pricing />
    <Contact />
    <Description v-if="false" />
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

export default {
  name: "index",
  components: { Hero, Feature, Pricing, Photo, Schedule, Curriculum, Quote, Contact, Description }
}
</script>

<style lang="scss" scoped>

</style>