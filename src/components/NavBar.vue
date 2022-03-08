<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/colorful_logo.png" alt="logo">
      </router-link>
      <section class="container-links dark-title">
        <div class="navbar-text">QUEM SOMOS</div>
        <div class="navbar-text">PARCEIROS</div>
        <div class="navbar-text">NOTÍCIAS</div>
        <div class="navbar-text">DOCUMENTOS</div>
        <div class="navbar-text">AGENDA</div>
        <div class="navbar-text">FALE CONOSCO</div>
      </section>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
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
.dropdown {
  display: none;
}
@media (max-width: 991px) {
  .navbar-text {
    margin: auto 10px;
  }
  .dark-title {
    font-size: 1rem;
  }
}
@media (max-width: 767px) {
  .dark-title {
    font-size: 0.7em;
  }
}
@media (max-width: 485px) {
  .container-links {
    display: none;
  }
  a {
    img {
      width: 60px
    }
  }
  .dropdown {
    display: block;
  }
}
</style>