<template>
<!-- TODO: fix banner size out of tv screen -->
  <figure class="banner">
    <slot />
    <figcaption class="d-none">{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

  const props = defineProps<{
    path: string,
    figcaption: string,
    imgAlt: string,
    pixelsBgHeight: string
  }>()

  onMounted(() => {
    const fig: HTMLElement = document.querySelector('figure.banner')!
    fig.style.cssText = `
      background: url('${props.path}') no-repeat center center;
      background-size: contain;
      height: ${props.pixelsBgHeight}
    `
  })
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