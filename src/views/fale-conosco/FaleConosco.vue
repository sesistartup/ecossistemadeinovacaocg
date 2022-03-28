<template>
  <NavBar :is-transparent="false"/>
  <Banner 
    path="/fale-conosco/fale-conosco-banner.png"
    figcaption="costumer-service"
    img-alt="costumer-service"
  >
    <div class="d-flex h-100">
      <img src="/fale-conosco/fale-conosco-icon.png" alt="Fale Conosco">
      <h1 class="dark-title">FALE<br>CONOSCO
        <p class="dark-body-text">
          contato@ecossistemadeinovacaocg.com.br
        </p>
      </h1>
    </div>
  </Banner>
  <Formulario />
  <FooterComponent />
</template>

<script setup lang="ts">
import Banner from '../../components/general/Banner.vue';
import Formulario from '../../components/faleConosco/Formulario.vue';
</script>

<style scoped lang="scss">
  div.d-flex {
    position: absolute;
    top: 0;
    align-items: center;
    justify-content: flex-start;
    padding: 0 150px;
    img {
      max-width: 120px;
      min-width: 20px;
      width: 20%;
    }
    h1 {
      font-size: 2.5rem;
      text-align: start;
      margin-bottom: 2.5rem !important;
      margin-left: 2rem;
      p.dark-body-text {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 1200px) {
    div.d-flex {
      h1 {
        font-size: 2rem;
        text-align: start;
        margin-bottom: 2rem !important;
        margin-left: 1.5rem;
      }
    }
  }
  @media (max-width: 991px) {
    div.d-flex {
      padding: 0 100px;
      h1 {
        font-size: 1.5rem;
        text-align: start;
        margin-bottom: 2rem !important;
        margin-left: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
  div.d-flex {
    padding: 0 50px;
      h1 {
        font-size: 1rem;
        text-align: start;
        margin-bottom: 2rem !important;
        margin-left: 1rem;
      }
    }
  }
  @media (max-width: 576px) {
  div.d-flex {
      h1 {
        font-size: 0.8rem;
        text-align: start;
        margin-bottom: 1rem !important;
        margin-left: 1rem;
      }
    }
  }
</style>