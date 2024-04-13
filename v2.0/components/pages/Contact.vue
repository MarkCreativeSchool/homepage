<template>
  <section id="contact">
    <div class="container">
      <Card>
        
        <div class="contact-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12895.521369638956!2d140.0914364871582!3d36.09640479999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220d0ad123dbc9%3A0x3674818813acc112!2z5bCP44O75Lit44O76auY55Sf5ZCR44GRIOaDheWgseODu-ODl-ODreOCsOODqeODn-ODs-OCsOWwgumWgOOCueOCr-ODvOODq01BUks!5e0!3m2!1sja!2sjp!4v1712378862481!5m2!1sja!2sjp" class="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            <Marker :options=" { position:center } " />
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
                <p style="font-weight: bold;"><a href="tel:029-875-7647">029-875-7647</a></p>
                <p style="">※不在の場合は <a href="tel:080-4174-0317">080-4174-0317</a> もしくは、折り返しお電話をさせていただきます。</p>
              </div>
            </div>
            <!-- email -->
            <div class="content email">
              <i class="las la-envelope"></i>
              <p>mcs@mark-inc.net</p>
            </div>
          </div>
          </iframe>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/molecules/Card"
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map"
export default defineComponent( {
  name: "Contact",
  components: { Card, GoogleMap, Marker },
  setup() {
    const center = {lat:36.0964048, lng: 140.1104909};
    const handleMapClick = () => {
      const lat = 36.0964048;
      const lng = 140.1104909;
      const mapURL = `https://www.google.com/maps?q=${lat},${lng}`;
      window.open(mapURL, "_blank")
    }
    
    return { center, handleMapClick };
  }
})
</script>

<style lang="scss" scoped>
#contact {
  padding: 40px 0;
  @media screen and (max-width:800px) {
    padding: 0;
  }
}

.contact-box {
  position: relative;
}

.map {
  // position: relative;
  width: 100%;
  height: 500px;
  border: 0;

}


.contact-detail {
  position: absolute;
  width: 50%;
  height: 50%;
  @media screen and (max-width:800px) {
    width: 90%;
    height: 40%;
    margin: 0 auto;
  }
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
  @media screen and (max-width: 800px) {
    margin: 8px 10px;
    
  }
}

.content i {
  font-size: 175%;
  @media screen and (max-width: 800px) {
    font-size: 150%;
  }
}

.content p {
  margin: 0;
  padding: 0;
  font-size: 90%;
  padding-left: 10px;
  @media screen and (max-width: 800px) {
    font-size: 75%;
  }
}


</style>
