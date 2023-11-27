<template>
  <section id="contact">
    <div class="container">
      <Card>
        
        <div class="contact-box">
          <img src="../../composables/map.png">
          <div class="contact-detail">
            <div class="main-title">
              <h2 class="font-weight-normal">お問い合わせ</h2>
            </div>
            <!-- address -->
            <div class="content address">
              <i class="las la-map-marked"></i>
              <p>〒300-0005　茨城県つくば市天久保2丁目14-2 つくばイーストビル202</p>
            </div>
            <!-- tel -->
            <div class="content tel">
              <i class="las la-phone"></i>
              <div class="tel-detail">
                <p style="font-size: 22px; font-weight: bold;"><a href="tel:029-875-7647">029-875-7647</a></p>
                <p style="font-size: 14px;">※不在の場合は <a href="tel:080-4174-0317">080-4174-0317</a> もしくは折り返しお電話をさせていただきます</p>
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
export default {
  name: "Contact",
  components: { Card },
}
</script>

<style lang="scss" scoped>
#contact {
  padding: 40px 0;
}

.contact-box {
  position: relative;
}

.contact-detail {
  position: absolute;
  width: 60%;
  height: 250px;
  background-color: white;
  top: 30px;
  left: 30px;
  opacity: 0.8;
}

.main-title {
  padding: 20px 0px 10px 20px;
  color: black;
}

.content {
  color: black;
  // padding-left: 20px;
  display: flex;
  margin: 10px 20px;
}

.content i {
  font-size: 32px;
}

.content p {
  font-size: 18px;
  padding-left: 10px;
}


</style>
