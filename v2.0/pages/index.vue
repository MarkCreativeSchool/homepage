<template>
  <div>
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from "~/components/pages/Hero"
import About from "~/components/pages/About"

export default {
  name: "index",
  components: { Hero, About }
}
</script>

<style scoped>

</style>