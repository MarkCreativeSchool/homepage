<template>
    <section id="parking">
      <div class="container">
        <h2 class="guide">駐車場のご案内</h2>
      </div>
      <div class="container">
        <div class="youtube-container">
            <div v-html="embedCode" class="youtube"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Parking",
    data() {
      return {
        videoId: 'E7NUAYdiDN4'
      }
    },
    methods: {
    },
    computed: {
        embedCode() {

            return `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.videoId}" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `;
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  #parking {
    padding: 40px 0;
    background: #fff;
    
    .container {
        margin: 0 auto;
        .youtube-container {
            text-align: center;
        }
    }
  }
  </style>
  