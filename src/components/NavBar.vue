<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/colorful_logo.png" alt="logo">
      </router-link>
      <section class="container-links">
        <div class="navbar-text">QUEM SOMOS</div>
        <div class="navbar-text">PARCEIROS</div>
        <div class="navbar-text">NOTÍCIAS</div>
        <div class="navbar-text">DOCUMENTOS</div>
        <div class="navbar-text">AGENDA</div>
        <div class="navbar-text">FALE CONOSCO</div>
      </section>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
  isTransparent: Boolean
}>()

onMounted(() => {
  // TODO: terminar centralização relativa
  const logo: HTMLElement = document.querySelector('.navbar-brand')!
  const logoWidth: number = logo.clientWidth

  const containerLinks: HTMLElement = document.querySelector('.container-links')!
  const containerCss = window.getComputedStyle(containerLinks)

  const mLeft: number = parseInt(containerCss.marginLeft)
  const fixedMargin: Number = new Number(mLeft - logoWidth)

  containerLinks.style.cssText = 'margin-left: ' + fixedMargin.toString() + ' !important';
})
</script>

<style scoped lang="scss">
.container-fluid {
  justify-content: unset;
  flex-wrap: nowrap;
}
.container-links {
  display: flex;
  flex-direction: row;
  margin: auto;
  flex-wrap: wrap;
}
.navbar-text {
  margin: auto 20px;
}
a {
  img {
    width: 70%;
    min-width: 60px;
  }
}
@media (max-width: 991px) {
.navbar-text {
  margin: auto 10px;
}
}
</style>