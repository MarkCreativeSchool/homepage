<template>
  <section id="pricing">
    <div class="container">
      <h2>料金表</h2>
    </div>
    <div class="container">
      <div class="columns">
        <div v-for="item in items" class="column is-4">
          <div class="pricing-item">
            <h3>{{ item.grade }}</h3>
            <h4>週1時間コース</h4>
            <div class="price"><b>{{ item.price1 }}</b>円 / 月</div>
            <div class="price-on-tax">税込 {{ item.price1tax }}円</div>
            <hr />
            <h4>週2時間コース</h4>
            <div class="price"><b>{{ item.price2 }}</b>円 / 月</div>
            <div class="price-on-tax">税込 {{ item.price2tax }}円</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      ※PCをご持参の場合は、1,000円引きとなります。
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      items: [
        {
          grade: "小学生",
          price1: "7,500",
          price1tax: "8,250",
          price2: "13,000",
          price2tax: "14,300",
        },
        {
          grade: "中学生",
          price1: "6,500",
          price1tax: "7,150",
          price2: "11,500",
          price2tax: "12,650",
        },
        {
          grade: "高校生",
          price1: "6,500",
          price1tax: "7,150",
          price2: "11,500",
          price2tax: "12,650",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
#pricing {
  padding: 40px 0;
  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 32px;
    margin-bottom: 32px;
    color: #e57bff;
  }
  .pricing-item {
    box-shadow: 0 6px 34px rgba(215, 216, 222, 0.41);
    padding: 20px;
    h3 {
      text-align: center;
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 16px;
    }
    h4 {
      text-align: center;
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 4px;
    }
    .price {
      text-align: center;
      b {
        display: inline-block;
        font-size: 32px;
        margin-right: 4px;
      }
    }
    .price-on-tax {
      text-align: center;
      font-size: 14px;
      color: #999;
    }
    .price-content {
      margin-top: 20px;
      padding-top: 20px;
      border-top: solid 1px #eee;
    }
  }
}
</style>