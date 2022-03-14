<template>
  <section class="container-cards-parceiros" :id="'container-parceiros' + containerId">
    <header>
      <h1 class="dark-title">{{ tipoDeInstituicao }}</h1>
      <hr class="w-100">
    </header>
    <main>
      <!-- TODO: fix card distance based on amount of cards -->
      <CardParceiro v-for="(parceiro, index) in parceiros" :key="parceiro.parceiroId" 
        :card-parceiro="parceiro"
      />
    </main>
  </section>
</template>

<script setup lang="ts">
import CardParceiro from './CardParceiro.vue';

  const props = defineProps<{
    tipoDeInstituicao: string
    parceiros: {
      hasLogo: boolean,
      logo: string,
      logoAlt: string,
      parceiroId: number
    }[]
    containerId: number
  }>()
</script>

<style scoped lang="scss">
  .container-cards-parceiros {
    header {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-top: 70px;
      margin-bottom: 10px;
      h1 {
        font-size: 1.5rem;
      }
    }
    main{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-template-rows: 220px;
      gap: 20px 9%;
    }
  }
  @media (max-width: 1031px) {
    .container-cards-parceiros {
      main{
        column-gap: 5%;
      }
    }
  }
  @media (max-width: 576px) {
    .container-cards-parceiros {
      main {
        justify-items: center;
      }
    }
  }
</style>