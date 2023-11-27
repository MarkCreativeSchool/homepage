<template>
  <section id="schedule">
    <div class="container">
      <h2 class="guide">スケジュール</h2>
    </div>
    <div class="container">
        <div class="columns">
        <div v-for="item in items" class="column is-4">
          <div class="schedule-item">
            <div class="day"><i class="las la-angle-double-down"></i>{{ item.day }}</div>
            <div class="course">{{ item.course1 }}</div>
            <div class="time">
              <p><i class="las la-square-full"></i>{{ item.time1 }}</p>
              <p><i class="las la-square-full"></i>{{ item.time2 }}</p>
            </div>
            <div class="course">{{ item.course2 }}</div>
            <div class="time">
              <p><i class="las la-square-full"></i>{{ item.time3 }}</p>
            </div>
            </div>
        </div>
      </div>
        <div>※週1時間コースの場合いずれかの曜日、時間で1時間。週2時間コースの場合いずれかの曜日の2時間枠をお選びください。</div>
        <div>※毎月4回レッスンがあります。祝祭日等がある場合は別の日に振替可能です。</div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/molecules/Card"
export default {
  name: "Schedule",
  components: { Card },
  data() {
    return {
      items: [
        {
          day: "月曜日 Monday",
          course1: "1時間コース",
          course2: "2時間コース",
          time1: "17:00 ~ 18:00",
          time2: "18:00 ~ 19:00",
          time3: "17:00 ~ 19:00",
        },
        {
          day: "水曜日 Wednesday",
          course1: "1時間コース",
          course2: "2時間コース",
          time1: "17:00 ~ 18:00",
          time2: "18:00 ~ 19:00",
          time3: "17:00 ~ 19:00",
        },
        {
          day: "土曜日 Saturday",
          course1: "1時間コース",
          course2: "2時間コース",
          time1: "14:00 ~ 15:00",
          time2: "15:00 ~ 16:00",
          time3: "14:00 ~ 16:00",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
#schedule {
  padding: 40px 0;

  .schedule-item {
    padding: 20px;
    box-shadow: 0 6px 34px rgba(215, 216, 222, 0.41);

    .day {
      font-size: 20px;
      color: #4F393C;
      font-weight: bold;
      padding-bottom: 10px;
      i {
        padding-right: 10px;
      }
    }

    .content {
      width: 100%;
    }

    .course {
      width: 100%;
      background-color: #f3f3f3;
      
      padding: 10px 0px 10px 10px;
      font-size: 15px;
      font-weight: bold;
      color: #4F393C;
    }

    .time {
      padding: 10px 0px 20px 10px;
      font-weight: bold;
      color: #4F393C;
      font-size: 18px;
      p {
        line-height: 40px;
      }
    }
  }
  
}
</style>