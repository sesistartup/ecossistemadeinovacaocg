<template>
  <NavBar 
    :is-transparent="false"
  />
  <Banner
    path="/eventos/banner.png"
    img-alt="agenda de eventos"
    figcaption="eventos do ecossistema"
  >
  <div class="d-flex h-100 position-absolute top-0 ghp">
    <img src="/eventos/banner_icon.png" alt="icon">
    <h1 class="dark-title">EVENTOS
      <p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
    </h1>
  </div>
  </Banner>
  <Destaques />
  <ContainerCardsEvento />
  <FooterComponent />
</template>

<script setup lang="ts">
import NavBar from '../../components/general/NavBar.vue';
import Banner from '../../components/general/Banner.vue';
import Destaques from '../../components/eventos/Destaques.vue';
import ContainerCardsEvento from '../../components/eventos/ContainerCardsEvento.vue';
import FooterComponent from '../../components/general/FooterComponent.vue';
</script>

<style scoped lang="scss">
  div.d-flex {
    justify-content: flex-start;
    align-items: center;
    img {
      max-width: 120px;
      min-width: 20px;
      width: 20%;
    }
    h1 {
      font-size: 2.5rem;
      text-align: start;
      margin-left: 2rem;
      p {
        font-size: 1rem;
        max-width: 450px;
        width: 100%;
        text-align: justify;
        margin-top: 10px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4; /* number of lines to show */
                  line-clamp: 4; 
          -webkit-box-orient: vertical;
      }
    }
  }
  @media (max-width: 1200px) {
    div.d-flex {
      h1 {
        font-size: 2rem;
        text-align: start;
        margin-left: 1.5rem;
        p {
          font-size: 0.8rem;
          max-width: 350px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    div.d-flex {
      padding: 0 100px;
      h1 {
        font-size: 1.5rem;
        text-align: start;
        margin-left: 1.5rem;
        p {
          max-width: 200px;
        }
      }
    }
  }
  @media (max-width: 768px) {
  div.d-flex {
    padding: 0 50px;
      h1 {
        font-size: 1rem;
        text-align: start;
        margin-left: 1rem;
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 576px) {
  div.d-flex {
      h1 {
        font-size: 0.8rem;
        text-align: start;
        margin-left: 0.8rem;
        margin-bottom: 0;
        p {
          max-width: 100px;
          text-align: start;
          margin-top: 0;
          -webkit-line-clamp: 3; /* number of lines to show */
                  line-clamp: 3; 
        }
      }
    }
  }
</style>