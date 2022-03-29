<template>
  <NavBar :is-transparent="true"/>
  <section class="container-fluid">
    <main>
      <Banner 
        path="/home/fundo.png"
        figcaption="workspace_image"
        img-alt="workspace_image"
        pixels-bg-height="710px"
      />
      <GeneralContainer
        title="CONHEÇA O ECOSSISTEMA"
        :dark-title="true"
        :content-array="['Entenda como surgiu e qual é o propósito da comunidade.', '/home/people_and_postits.png']"
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
        :content-array="['/home/white_logo.png', 'A comunidade de Inovação em Campo Grande – MS está reunida para ajudar você a se qualificar, estruturar o seu projeto, abrir o seu negócio, facilitar processos e estimular o desenvolvimento socioeconômico local.', 'Quer fazer parte? É só clicar ali no FALE CONOSCO e mandar uma mensagem para a gente.']"
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
  '/chumbado/home_parceiros/aginova.png',
  '/chumbado/home_parceiros/arteiras.png',
  '/chumbado/home_parceiros/ecoinova.png',
  '/chumbado/home_parceiros/famasul_senar_sindicatos.png',
  '/chumbado/home_parceiros/fecomercio.png',
  '/chumbado/home_parceiros/fundect.png',
  '/chumbado/home_parceiros/ict_grande.png',
  '/chumbado/home_parceiros/incubadora_municipal.png',
  '/chumbado/home_parceiros/livinglab.png',
  '/chumbado/home_parceiros/logo_eng.png',
  '/chumbado/home_parceiros/pime.png',
  '/chumbado/home_parceiros/semagro.png',
  '/chumbado/home_parceiros/senai.png',
  '/chumbado/home_parceiros/ucdb.jpg',
  '/chumbado/home_parceiros/uems.png',
  '/chumbado/home_parceiros/ufms.png',
]

</script>

<style scoped lang="scss">
  section.container-fluid {
    padding: 0;
  }
</style>