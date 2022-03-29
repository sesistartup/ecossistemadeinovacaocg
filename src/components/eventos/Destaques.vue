<template>
  <section class="destaques ghp">
    <header>
      <h1 class="dark-title">DESTAQUES</h1>
    </header>
    <main>
      <DestaquesCarousel
        :carousel-data="dummyCarouselData"
      />
    </main>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import DestaquesCarousel from './DestaquesCarousel.vue';

const dummyCarouselData = reactive([
  {
    img: '/eventos/event_img.png',
    eventName: 'NOME DO EVENTO',
    eventDate: '01/01/2022',
    eventLocation: 'R.LOREM IPSUM DOLOR SIT, 2000',
    detailLink: '#',
    eventId: 1
  },
  
  {
    img: '/eventos/event_img.png',
    eventName: 'NOME DO EVENTO 2',
    eventDate: '01/01/2022',
    eventLocation: 'R.LOREM IPSUM DOLOR SIT, 2000',
    detailLink: '#',
    eventId: 2
  },
  
  {
    img: '/eventos/event_img.png',
    eventName: 'NOME DO EVENTO 3',
    eventDate: '01/01/2022',
    eventLocation: 'R.LOREM IPSUM DOLOR SIT, 2000',
    detailLink: '#',
    eventId: 3
  }
])
</script>

<style scoped lang="scss">
  section.destaques {
    background-color: #f6f6f6;
    h1 {
      font-size: 1.5rem;
    }
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }
  @media (max-width: 991px) {
    section.destaques {
      header {
        h1.dark-title {
          font-size: 1.2rem;
        }
      }   
    }
  }
</style>