<template>
  <section id="container-cards-evento" class="ghp">
    <header>
      <h1>TÍTULO DA SEÇÃO</h1>
    </header>
    <nav v-for="(cardPage, index) in dummyCardsPages">
      <div class="container-fluid h-100" v-if="index === selectedPage">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-4" v-for="(card, index) in cardPage" :key="index">
            <CardEvento
              :hasImage="card.hasImage"
              :image="card.image"
              :nomeEvento="card.nomeEvento"
              :dataEvento="card.dataEvento"
              :enderecoEvento="card.enderecoEvento"
              :class="setSelfMargin(index)"
            />
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import CardEvento from './CardEvento.vue';

const selectedPage = ref(0)
const dummyCardsPages = reactive([
  [
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Quadrado das Sungas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Losango das Regatas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento abc",
      dataEvento: "27/11/2023",
      enderecoEvento: "Triângulo das Bermudas, WTF",
    }
  ],
  [
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Quadrado das Sungas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Losango das Regatas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento abc",
      dataEvento: "27/11/2023",
      enderecoEvento: "Triângulo das Bermudas, WTF",
    }
  ],
  [
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Quadrado das Sungas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento 01",
      dataEvento: "11/11/2023",
      enderecoEvento: "Losango das Regatas, WTF",
    },
    {
      hasImage: false,
      image: 'opa',
      nomeEvento: "Evento abc",
      dataEvento: "27/11/2023",
      enderecoEvento: "Triângulo das Bermudas, WTF",
    }
  ]
])
const setSelfMargin = (num: number) => {
  if (num === 1) return 'm-auto'
  return num === 0 ? 'mr-auto' : 'ml-auto'
}
</script>

<style scoped lang="scss">
  #container-cards-evento {
    nav {
      .container-fluid {
        padding: 0;
        height: 500px;
      }
    }
  }
  .ml-auto {
    margin-left: auto
  }
  .mr-auto {
    margin-right: auto;
  }
</style>