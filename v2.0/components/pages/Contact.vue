<template>
  <section id="contact">
    <div class="container">
      <Card>
        <div class="contact-box">
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12895.521369638956!2d140.0914364871582!3d36.09640479999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220d0ad123dbc9%3A0x3674818813acc112!2z5bCP44O75Lit44O76auY55Sf5ZCR44GRIOaDheWgseODu-ODl-ODreOCsOODqeODn-ODs-OCsOWwgumWgOOCueOCr-ODvOODq01BUks!5e0!3m2!1sja!2sjp!4v1712378862481!5m2!1sja!2sjp" class="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="contact-detail">
            <div class="main-title">
              <h2 class="font-weight-normal">お問い合わせ</h2>
            </div>
            <!-- address -->
            <div class="content address">
              <i class="las la-map-marked"></i>
              <p>〒305-0005　<br>茨城県つくば市天久保2丁目14-2 つくばイーストビル202</p>
            </div>
            <!-- tel -->
            <div class="content tel">
              <i class="las la-phone"></i>
              <div class="tel-detail">
                <p style="font-weight: bold; font-size: 120%;"><a href="tel:029-875-7647">029-875-7647</a></p>
                <p style="font-size: 90%;">※不在の場合は <a href="tel:080-4174-0317">080-4174-0317</a> もしくは、折り返しお電話をさせていただきます。</p>
              </div>
            </div>
            <!-- email -->
            <div class="content email">
              <i class="las la-envelope"></i>
              <p>mcs@mark-inc.net</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/molecules/Card"
import { defineComponent } from "vue";

export default defineComponent( {
  name: "Contact",
  components: { Card },
})
</script>

<style lang="scss" scoped>
#contact {
  padding: 40px 0;
  @media screen and (max-width: 700px) {
    .contact-box {
      flex-direction: column;
    }
    .map-container {
      order: 2;
    }
  }
}

.contact-box {
  position: relative;
  display: flex;
}

.map-container,
.contact-detail {
  // vertical-align: top;
  width: 100%;
}

.map {
  width: 100%;
  height: 500px;
  border: 0;
}

.contact-detail {
  background-color: white;
  // margin-left: px;
  padding: 20px;
}

.main-title {
  padding: 0px 0px 10px 0px;
  color: black;
}

.content {
  color: black;
  margin: 10px 0;
  display: flex;
}

.content i {
  font-size: 175%;
}

.content p {
  margin: 0;
  padding-left: 15px;
  font-size: 100%;
}
</style>
