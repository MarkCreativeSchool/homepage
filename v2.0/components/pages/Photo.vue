<template>
  <section id="photo">
    <div class="container">
      <h2 class="guide">写真</h2>
    </div>
    <div class="container">
      <div class="grid">
        <div v-for="i in items" class="grid-items">
          <div class="g-image">
            <img :src="`/images/g/${i}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      items: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
    }
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
    .g-image {
      img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 922px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
    }
  }
  @media screen and (max-width: 767px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
  }
}
</style>