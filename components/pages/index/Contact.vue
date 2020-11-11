<template>
  <section id="contact" class="bg-light-gray">
    <div class="container">
      <div class="row mx-lg-0">
        <div class="col-lg-6 col-md-6 col-sm-12 p-0">
          <div class="contact-box">
            <div class="main-title text-center text-md-left mb-4">
              <h2 class="font-weight-normal">Connect With Us </h2>
            </div>

            <div class="text-center text-md-left">

              <!--Address-->
              <p class="mb-3">123 Street New York City , United States Of America. </p>

              <!--Phone-->
              <p class="mb-3"> Office Telephone : 001 01085379709 <br>
                Mobile : 001 63165370895 </p>

              <!--Email-->
              <p class="mb-3"> Email: <a href="mailto:email@website.com" class="color-black">admin@website.com</a> <br>
                Inquiries: <a href="mailto:email@website.com" class="color-black">email@website.com</a> </p>

              <!--Timing-->
              <p class="mb-0">Mon-Sat: 9am to 6pm</p>
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
