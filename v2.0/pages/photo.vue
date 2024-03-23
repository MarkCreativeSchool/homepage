<template>
    <section id="photo">
      <div class="container">
        <h2 class="guide">写真</h2>
      </div>
      <div class="container">
      <div class="grid">
        <div v-for="(item, index) in items" :key="index" class="grid-items" @click="openModal(index)">
          <div class="g-image">
            <img :src="`/images/g/${item}`" />
            <!-- グラデーションの追加 -->
            </div>
        </div>
      </div>
    <transition name="component-fade">
      <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-container">
          <span class="close-button" @click="closeModal">&times;</span>
          <img :src="`/images/g/${selectedImage}`" class="modal-image" />
        </div>
      </div>
    </transition>
  </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Photo",
    data() {
      return {
        items: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg","9.JPG", "10.JPG", "11.JPG", "12.PNG"],
        isModalOpen: false,
        selectedImage: null,
      }
    },
    methods: {
      openModal(index) {
        this.selectedImage = this.items[index];
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedImage = null;
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  #photo {
    padding: 100px 0;
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
          img {
            display: block;
            max-width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
            object-fit: cover;
          }
        }
      }
    }
  
    .gradient-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80%;
      background-image: linear-gradient(180deg, transparent 0%, #FFF 100%);
    }
  
    .modal-overlay {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-container {
      max-width: 50%;
      max-height: auto;
      overflow: hidden;
      background: #fff;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 60px;
    }
  
    .modal-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: #000;
      cursor: pointer;
    }
  
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .5s ease;
    }
  
    .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
    }
  
  
  
  
  }
  </style>
  