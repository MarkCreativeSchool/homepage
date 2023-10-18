<template>
  <section id="pricing" class="bg-light-gray pricing-padding">
    <div class="container">
      <h2>料金</h2>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <h3>小学生</h3>
          <table class="table is-bordered is-fullwidth">
            <tbody>
            <tr>
              <td>週1時間</td>
              <td>8,000円</td>
            </tr>
            <tr>
              <td>週2時間</td>
              <td>16,000円</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-4">
          <h3>中学生</h3>
          <table class="table is-bordered is-fullwidth">
            <tbody>
            <tr>
              <td>週1時間</td>
              <td>6,000円</td>
            </tr>
            <tr>
              <td>週2時間</td>
              <td>12,000円</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-4">
          <h3>高校生</h3>
          <table class="table is-bordered is-fullwidth">
            <tbody>
            <tr>
              <td>週1時間</td>
              <td>6,000円</td>
            </tr>
            <tr>
              <td>週2時間</td>
              <td>12,000円</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
}
</script>

<style lang="scss" scoped>
#pricing {
  padding: 40px 0;
}
</style>