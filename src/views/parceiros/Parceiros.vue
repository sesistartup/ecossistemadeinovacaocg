<template>
  <!-- <router-link to="/parceiros/id">clica aqui</router-link> -->
  <NavBar 
    :is-transparent="false"
  />
  <section class="parceiros ghp">
    <ContainerCardsParceiro v-for="(container, index) in parceirosContainers" :key="index"
      :tipo-de-instituicao="container.tipoInstituicao"
      :parceiros="container.parceiros"
      :container-id="index"
    />
  </section>
  <FooterComponent />
</template>

<script setup lang="ts">
import NavBar from '../../components/general/NavBar.vue';
import FooterComponent from '../../components/general/FooterComponent.vue';
import ContainerCardsParceiro from '../../components/parceiros/ContainerCardsParceiro.vue';
import { reactive } from 'vue';

  const parceirosContainers = reactive([
    {
      tipoInstituicao: 'UNIVERSIDADES',
      parceiros: [
        {
          hasLogo: true,
          logo: '/src/assets/home/carousel/estacio.png',
          logoAlt: 'estacio',
          parceiroId: 1
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 2
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 3
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 4
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 5
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 6
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 7
        },
      ]
    },
    {
      tipoInstituicao: 'EMPRESAS',
      parceiros: [
        {
          hasLogo: true,
          logo: '/src/assets/home/carousel/estacio.png',
          logoAlt: 'estacio',
          parceiroId: 1
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 2
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 3
        }
      ]
    },
    {
      tipoInstituicao: 'STARTUPS',
      parceiros: [
        {
          hasLogo: true,
          logo: '/src/assets/home/carousel/estacio.png',
          logoAlt: 'estacio',
          parceiroId: 1
        },
        {
          hasLogo: false,
          logo: '...',
          logoAlt: 'parceiro',
          parceiroId: 2
        }
      ]
    }
  ])
</script>

<style scoped lang="scss">
  section.parceiros {
    background-color: #f6f6f6;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
</style>