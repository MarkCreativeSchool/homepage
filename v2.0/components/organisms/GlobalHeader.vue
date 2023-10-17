<template>
  <div id="global-header">
    <div class="brand">
      <a class="logo" href="javascript:void(0)">
        <h2>情報・プログラミング専門スクール</h2>
        <h1>MARK</h1>
      </a>
    </div>
    <div class="nav">
      <ul>
        <li><a href="#home" class="">ホーム</a></li>
        <li><a href="#about" class="">特徴</a></li>
        <li><a href="#work" class="active">写真</a></li>
        <li><a href="#pricing" class="">料金</a></li>
        <li><a href="#contact" class="">お問い合わせ</a></li>
      </ul>
    </div>
    <div class="side">
      <a href="javascript:void(0)" class="btn-setting btn-hvr-up btn-hvr-whatsapp color-black mr-lg-3 d-none d-lg-block">
        <i class="la la-whatsapp"></i> 029-875-7647
      </a>
    </div>
    <div>
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
  </div>
</template>

<script>
export default {
  name: "GlobalHeader"
}
</script>

<style lang="scss" scoped>
#global-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 20px;
  border-bottom: solid 1px #ddd;
  background: #fff;
  .brand {
    width: 200px;
    line-height: 1;
    a {
      color: #000;
      h2 {
        font-size: 12px;
      }
      h1 {
        margin-top: 4px;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
  .nav {
    flex: 1;
    ul {
      display: flex;
      justify-content: center;
      li {
        position: relative;
        text-align: center;
        a {
          display: block;
          padding: 0 20px;
          color: #333;
          font-weight: bold;
          &:hover {
            &:after {
              position: absolute;
              top: 80%;
              left: 50%;
              content: "•";
              color: #f1c30f;
              text-shadow: 10px 0 #84a1d2, -10px 0 #e57bff;
              transition: text-shadow 0.3s, color 0.3s;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }
  .side {
    width: 200px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 1px #aaa;
      color: #000;
      border-radius: 20px;
      padding: 4px 20px;
    }
  }
}
</style>