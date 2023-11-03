<template>
  <div id="curriculum">
    <div class="container">
      <h2 class="guide">カリキュラム</h2>
      <div class="columns">
        <div class="column is-4">
          <Card>
            <h3>マインクラフト</h3>
            <p>MARKでは独自の技術でマインクラフトを拡張し、子供たちがプログラミング・コンピューター・サーバー・ネットワークの技術を習得するための環境を用意しています。よくあるマインクラフトを使ったプログラミング学習方法では身につけることができない本格的な情報技術を楽しみながら学習します。</p>
          </Card>
        </div>
        <div class="column is-4">
          <Card>
            <h3>情報I x Python</h3>
            <p>大学入学共通テストに新設されることになった情報Iではコードによるプログラミング、アルゴリズムの理解が必要ですが、数学的な思考やコンピュータースキルなど幅広い知識が必要なため、プログラミングは一朝一夕で身に付くものではありません。
              MARKでは自社で開発している学習システムを利用して大学入試レベルのプログラミング・アルゴリズムの力を養います。</p>
          </Card>
        </div>
        <div class="column is-4">
          <Card>
            <h3>アプリ制作</h3>
            <p>webアプリ・webサイトの制作を通じて関連する情報技術を学びます。コンテストや検定にもチャレンジして
              将来必要になるIT全般の知識を養います。また、専門スタッフが在籍しているので、やる気や興味次第でフログラミングだけではなく、ネイティブアプリ・データベース・foT・
              AIなど最先端の情報技術に触れることもできます。</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/molecules/Card"
export default {
  name: "Curriculum",
  components: { Card },
}
</script>

<style lang="scss" scoped>
#curriculum {
  padding: 40px 0;
  h3 {
    text-align: center;
    color: #84a1d2;
    font-size: 24px;
    margin-bottom: 12px;
  }
  p {
    line-height: 1.75;
  }
}
</style>