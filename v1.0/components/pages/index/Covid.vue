<template>
  <section id="covid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div data-wow-delay="300ms" class="main-title wow fadeIn mb-5">
            <h5>about of covid-19</h5>
            <h2 class="mb-0">新型コロナウイルス<span class="color-pink">感染拡大防止対策</span>について</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div data-wow-delay="300ms" class="main-title wow fadeIn">
            <img src="/img/amabie.png" class="amabie-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Covid",
}
</script>

<style lang="scss" scoped>
#covid {
  padding: 7.5rem 0 2rem;
  @media screen and (max-width: 767px) {
    padding: 4.5rem 0 2rem;
  }
}
.amabie-image {
  max-width: 400px;
}
</style>
