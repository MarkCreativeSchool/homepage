<template>
  <section id="contact" class="bg-light-gray">
    <div class="container">
      <div class="row mx-lg-0">
        <div class="col-lg-6 col-md-6 col-sm-12 p-0">
          <div class="contact-box">
            <div class="main-title text-center text-md-left mb-4">
              <h2 class="font-weight-normal">お問い合わせ</h2>
            </div>
            <div class="text-center text-md-left">
              <!--Address-->
              <p class="mb-3">住所 : 茨城県つくば市天久保2丁目14-2 つくばイーストビル202</p>
              <!--Phone-->
              <p style="font-size: 22px; font-weight: bold;">Tel : <a href="tel:029-875-7647">029-875-7647</a></p>
              <p class="mb-3">※スタッフが不在の場合は折り返しお電話をさせていただきます</p>

              <!--Email-->
              <p class="mb-3">Email: <a href="mailto:markcreativeschool@gmail.com" class="color-black">markcreativeschool@gmail.com</a></p>

              <!--Timing-->
              <!--
              <p class="mb-0">Mon-Sat: 9am to 6pm</p>
              -->
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 p-0 col-map box-shadow-map">
          <div id="google-map" class="bg-light-gray map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
}
</script>
