<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="scss" scoped>
.v-card {
  box-shadow: 0 6px 34px rgba(215, 216, 222, 0.41);
  padding: 20px;
}
</style>