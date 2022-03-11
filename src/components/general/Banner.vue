<template>
<!-- TODO: fix banner size out of tv screen -->
  <figure class="banner">
    <img :src="path" :alt="imgAlt">
    <slot />
    <figcaption class="d-none">{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">

  const props = defineProps<{
    path: string,
    figcaption: string,
    imgAlt: string,
  }>()
</script>

<style scoped lang="scss">

  figure.banner {
    position: relative;
    margin: 0;
    img {
      width: -webkit-fill-available;
      height: -webkit-fill-available
    }
  }
</style>