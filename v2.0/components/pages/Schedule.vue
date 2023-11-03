<template>
  <section id="schedule">
    <div class="container">
      <h2 class="guide">スケジュール</h2>
    </div>
    <div class="container">
      <Card>
        <table class="table is-bordered is-fullwidth" style="table-layout: fixed">
          <thead>
            <tr>
              <th>月曜日</th>
              <th>水曜日</th>
              <th>土曜日</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>17:00 - 18:00</div>
                <div>18:00 - 19:00</div>
                <div>17:00 - 19:00</div>
              </td>
              <td>
                <div>17:00 - 18:00</div>
                <div>18:00 - 19:00</div>
                <div>17:00 - 19:00</div>
              </td>
              <td>
                <div>14:00 - 15:00</div>
                <div>15:00 - 16:00</div>
                <div>14:00 - 16:00</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>※週1時間コースの場合いずれかの曜日・時間で1時間。週2時間コースの場合いずれかの曜日の2時間枠をお選びください。</div>
        <div>※毎月4回レッスンがあります。祝祭日等がある場合は別の日に振替可能です。</div>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/molecules/Card"
export default {
  name: "Schedule",
  components: { Card },
}
</script>

<style lang="scss" scoped>
#schedule {
  padding: 40px 0;
  .table {
    th {
      background: #f3f3f3;
    }
    th, td {
      text-align: center;
    }
  }
}
</style>