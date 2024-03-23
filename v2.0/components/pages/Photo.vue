<template>
  <section id="photo">
    <div class="container">
      <h2 class="guide">写真</h2>
    </div>
    <div class="container">
      <div class="grid">
        <div v-for="(item, index) in items" :key="index" :class="{ 'second-row': index >= 5 }" class="grid-items" @click="openModal(index)">
          <div class="g-image">
            <img :src="`/images/g/${item}`" :style="{ opacity: (index >= 5) ? 1 - (index - 4) * 0.1 : 1, maskImage: (index >= 5) ? gradientMask : 'none' }" />
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/photo" class="more">もっと見る</nuxt-link>
  </section>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      items: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.JPG", "10.JPG"],
      isModalOpen: false,
      selectedImage: null,
      gradientMask: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)",

    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
#photo {
  padding: 40px 0;
  background: #fff;

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    .grid-items {
      position: relative;

      &:hover {
        cursor: pointer;
      }

      .g-image {
        position: relative;
        overflow: hidden;

        img {
          display: block;
          max-width: 100%;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }
      }
    }

    // 6~10番目の画像の下側を徐々に透明にする
    .second-row .g-image img {
      mask-size: 100% 200%; /* マスクサイズを2倍に設定 */
      mask-position: bottom; /* マスクの位置を下部に設定 */
      mask-repeat: no-repeat; /* マスクを繰り返ししないように設定 */
    }
  }

  .more {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* 調整可能なマージン */
    color: #4F393C;
    font-size: 15px;
  }
}
</style>
