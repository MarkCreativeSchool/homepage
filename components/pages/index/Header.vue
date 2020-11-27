<template>
  <header class="cursor-light">
    <nav class="navbar navbar-top-default navbar-expand-lg nav-three-circles black bottom-nav nav-box-shadow no-animation">
      <div class="container-fluid">
        <a class="logo ml-lg-1" href="javascript:void(0)">
          <!--
          <img src="creative-studio/img/logo.png" alt="logo" title="Logo" class="logo-default">
          <img src="creative-studio/img/logo2.png" alt="logo" title="Logo" class="logo-scrolled">
          -->
          MarkCreativeSchool
        </a>
        <div class="collapse navbar-collapse d-none d-lg-block">
          <ul class="nav navbar-nav mx-auto">
            <li class="nav-item"><a href="#home" class="scroll nav-link">ホーム</a></li>
            <li class="nav-item"><a href="#about" class="scroll nav-link">特徴</a></li>
            <li class="nav-item"><a href="#work" class="scroll nav-link">写真</a></li>
            <li class="nav-item"><a href="#pricing" class="scroll nav-link">料金</a></li>
            <li class="nav-item"><a href="#covid" class="scroll nav-link">コロナウイルス対策</a></li>
            <!--
            <li class="nav-item"><a href="#clients" class="scroll nav-link">clients</a></li>
            <li class="nav-item"><a href="#blog" class="scroll nav-link">blog</a></li>
            -->
            <li class="nav-item"><a href="#contact" class="scroll nav-link">お問い合わせ</a></li>
          </ul>
        </div>
        <a href="javascript:void(0)" class="btn-setting btn-hvr-up btn-hvr-whatsapp color-black mr-lg-3 d-none d-lg-block">
          <i class="fab fa-whatsapp"></i> 029 875 7647
        </a>
        <!-- side menu open button -->
        <a class="menu_bars d-inline-block menu-bars-setting animated-wrap sidemenu_toggle d-block d-lg-none">
          <div class="menu-lines animated-element">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <!-- Side Menu -->
      </div>
    </nav>
    <!-- side menu open button -->
    <a class="menu_bars menu-bars-setting animated-wrap sidemenu_toggle d-lg-inline-block d-none">
      <div class="menu-lines animated-element">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
    <!-- Side Menu -->
    <div class="side-menu center">
      <div class="quarter-circle">
        <div class="menu_bars2 active" id="btn_sideNavClose">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="inner-wrapper justify-content-center">
        <div class="col-md-12 text-center">
          <a href="javascript:void(0)" class="logo-full mb-4 menu-logo">
            Mark Creative School
            <!--
            <img src="creative-studio/img/logo-pure-white.png" alt=""/>
            -->
          </a>
        </div>
        <nav class="side-nav m-0">
          <ul class="navbar-nav flex-lg-row">
            <li class="nav-item"><a href="#home" class="scroll nav-link">ホーム</a></li>
            <li class="nav-item"><a href="#about" class="scroll nav-link">特徴</a></li>
            <li class="nav-item"><a href="#work" class="scroll nav-link">写真</a></li>
            <li class="nav-item"><a href="#pricing" class="scroll nav-link">料金</a></li>
            <!--
            <li class="nav-item"><a href="#clients" class="scroll nav-link">clients</a></li>
            <li class="nav-item"><a href="#blog" class="scroll nav-link">blog</a></li>
            -->
            <li class="nav-item"><a href="#covid" class="scroll nav-link">コロナウイルス対策</a></li>
            <li class="nav-item"><a href="#contact" class="scroll nav-link">お問い合わせ</a></li>
          </ul>
        </nav>

        <div class="side-footer text-white w-100">
          <ul class="social-icons-simple">
            <li class="side-menu-icons">
              <a href="https://www.facebook.com/MarkCreativeSchool/" target="_blank">
                <i class="fab fa-facebook-f color-white"></i>
              </a>
            </li>
            <li class="side-menu-icons">
              <a href="https://twitter.com/m_c_school" target="_blank">
                <i class="fab fa-instagram color-white"></i>
              </a>
            </li>
            <li class="side-menu-icons">
              <a href="https://www.instagram.com/mark_creative_school/" target="_blank">
                <i class="fab fa-twitter color-white"></i>
              </a>
            </li>
          </ul>
          <p class="text-white">&copy; 2020 Mark Creative School</p>
        </div>
      </div>
    </div>
    <a id="close_side_menu" href="javascript:void(0);"></a>
    <!--Side Menu-->
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 200px;
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
.menu-logo {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  width: 285px;
}
</style>
