<template>
  <figure class="banner">
    <img :src="path" :alt="imgAlt">
    <slot />
    <figcaption class="d-none">{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

  const props = defineProps({
    path: String,
    figcaption: String,
    imgAlt: String,
    maxHeight: {
      type: String,
      required: false,
      default: 'unset'
    }
  })

  onMounted(() => {
    const imgBanner: HTMLElement = document.querySelector('figure.banner > img')!
    imgBanner.style.maxHeight = props.maxHeight
  })
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