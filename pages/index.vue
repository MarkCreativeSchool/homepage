<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">MarkCreativeSchool</h1>
      <h2 class="subtitle">
        つくば市のプログラミングスクール
      </h2>
    </div>
  </section>
</template>

<script>
export default {}
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: #fff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: #fff;
}
@media (max-width: 640px) {
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: 26px;
  }
}
</style>
