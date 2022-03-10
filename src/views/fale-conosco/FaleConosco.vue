<template>
  <NavBar :is-transparent="false"/>
  <Banner 
    path="src/assets/fale-conosco/fale-conosco-banner.png"
    figcaption="costumer-service"
    img-alt="costumer-service"
    pixels-bg-height="362px"
  >
    <div class="d-flex h-100">
      <img src="../../assets/fale-conosco/fale-conosco-icon.png" alt="Fale Conosco">
      <h1 class="dark-title">FALE<br>CONOSCO</h1>
    </div>
  </Banner>
  <FooterComponent />
</template>

<script setup lang="ts">
import Banner from '../../components/general/Banner.vue';

</script>

<style scoped lang="scss">
  div.d-flex {
    align-items: center;
    justify-content: flex-start;
    padding: 0 150px;
    img {
      width: 120px;
    }
    h1 {
      font-size: 2.5rem;
      text-align: start;
      margin-bottom: 2.5rem !important;
    }
  }
</style>