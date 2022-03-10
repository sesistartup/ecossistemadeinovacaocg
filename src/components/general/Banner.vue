<template>
  <figure class="banner">
    <img :src="path" alt="workspace_image">
    <figcaption class="d-none">{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
  defineProps<{
    path: string,
    figcaption: string
  }>()
</script>

<style scoped lang="scss">

  figure.banner {
    margin: 0;
    img {
      width: -webkit-fill-available;
      height: -webkit-fill-available
    }
  }
</style>