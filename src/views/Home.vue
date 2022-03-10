<template>
  <NavBar :is-transparent="true"/>
  <section class="container-fluid">
    <main>
      <Banner 
        path="src/assets/home/fundo.png"
        figcaption="workspace_image"
        img-alt="workspace_image"
        pixels-bg-height="710px"
      />
      <GeneralContainer
        title="SLOGAN PARA APRESENTAR QUEM SOMOS"
        :dark-title="true"
        :content-array="['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad adipisci reiciendis dignissimos soluta sed iusto fugiat suscipit enim. Esse vero beatae quia praesentium, repellendus doloremque provident maiores eum suscipit.', 'src/assets/home/people_and_postits.png']"
        :has-know-more-btn="true"
        bg-color="#f6f6f6"
        id="presentation-container"
      />
      <Partners 
        :logos-url-array="logosParceiros"
      />
      <GeneralContainer
        title="MAIS SOBRE O ECOSSISTEMA"
        :dark-title="false"
        :content-array="['src/assets/home/white_logo.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad adipisci reiciendis dignissimos soluta sed iusto fugiat suscipit enim. Esse vero beatae quia praesentium, repellendus doloremque provident maiores eum suscipit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad adipisci reiciendis dignissimos soluta sed iusto fugiat suscipit enim. Esse vero beatae quia praesentium, repellendus doloremque provident maiores eum suscipit.']"
        :has-know-more-btn="false"
        bg-color="#639280"
        id="more-info-container"
      />
    </main>
  </section>
  <FooterComponent />
</template>

<script setup lang="ts">
import GeneralContainer from '../components/general/GeneralContainer.vue';
import Banner from '../components/general/Banner.vue'
import Partners from '../components/parceiros/Partners.vue';

const logosParceiros: string[] = [
  'src/assets/home/carousel/embrapa.png',
  'src/assets/home/carousel/estacio.png',
  'src/assets/home/carousel/oab.png',
  'src/assets/home/carousel/orthos.png',
  'src/assets/home/carousel/sesi.png',
  'src/assets/home/carousel/uems.png',
  'src/assets/home/carousel/unigran.png'
]

</script>

<style scoped lang="scss">
  section.container-fluid {
    padding: 0;
  }
</style>