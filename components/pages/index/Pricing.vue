<template>
  <section id="pricing" class="bg-light-gray pricing-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-title wow fadeIn" data-wow-delay="300ms">
            <h5>Monthly fee table</h5>
            <h2 class="mb-0"><span class="color-pink">料金表</span></h2>
          </div>
        </div>
      </div>
      <div class="row mt-xs-4rem">
        <div class="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
          <div class="pricing-item hvr-bg-blue">
            <div class="price-box clearfix">
              <div class="price_title">
                <h4 class="text-capitalize">週1時間</h4>
              </div>
            </div>
            <div class="price">
              <h2 class="position-relative"><span class="dollar">¥</span>6,000<span class="month">/ 月</span></h2>
            </div>
            <div class="price-description">
              <p>月 17:00〜 / 18:00〜</p>
              <p>水 17:00〜 / 18:00〜</p>
              <p>土 10:30〜 / 14:00〜</p>
              <p>いずれかの日時で週1回 1時間</p>
            </div>
            <!--
            <div class="text-center">
              <a href="javascript:void(0)" class="btn-setting color-black btn-hvr-up btn-blue btn-hvr-white">learn more</a>
            </div>
            -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
          <div class="pricing-item price-transform hvr-bg-yellow">
            <div class="quarter-triangle"></div>

            <div class="triangle-inner-content">
              <i class="fa fa-star"></i>
              <span> SPECIAL </span>
            </div>

            <div class="price-box2 clearfix">
              <div class="price_title">
                <h4 class="text-capitalize m-0">週2時間</h4>
                <p class="price-sub-heading text-capitalize">the most popular</p>
              </div>
            </div>
            <div class="price">
              <h2 class="position-relative"><span class="dollar">¥</span>10,000<span class="month">/ 月</span></h2>
            </div>
            <div class="price-description">
              <p>月 17:00〜</p>
              <p>水 17:00〜</p>
              <p>土 10:30〜 / 14:00〜</p>
              <p>いずれかの日時で週1回 2時間</p>
            </div>
            <!--
            <div class="text-center">
              <a href="javascript:void(0)" class="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-white">learn more</a>
            </div>
            -->
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 text-center wow fadeInUp">
          <div class="pricing-item hvr-bg-pink">
            <div class="price-box clearfix">
              <div class="price_title">
                <h4 class="text-capitalize">無料体験</h4>
              </div>
            </div>
            <div class="price">
              <h2 class="position-relative"><span class="dollar">¥</span>0<span class="month"></span></h2>
            </div>
            <div class="price-description">
              <p>月 17:00〜 / 18:00〜</p>
              <p>水 17:00〜 / 18:00〜</p>
              <p>土 10:30〜 / 14:00〜</p>
              <p>ご希望の日時で1時間</p>
            </div>
            <!--
            <div class="text-center">
              <a href="javascript:void(0)" class="btn-setting color-black btn-hvr-up btn-pink btn-hvr-white">learn more</a>
            </div>
            -->
          </div>
        </div>
      </div>
      <div class="text-center">※料金はすべて税込みの金額です</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
}
</script>
