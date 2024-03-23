import VueGtag from "vue-gtag";
// @see: https://std9.jp/articles/01fpet6p50yk16ybm3wd8f16pr
// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
  // ルーター取得
  const router = useRouter();

  // Vue登録
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'example',                 // サイトの名称
      pageTrackerScreenviewEnabled: true, // ページトラッキングスクリーンビューを有効
      config: { id: `G-J8T4QG10XQ` },     // GoogleAnalytics(GA4)の測定IDを指定する
    },
    router
  );
});