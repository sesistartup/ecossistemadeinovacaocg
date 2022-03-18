<template>
  <section class="container-fluid partners-container ghp">
    <h1 class="dark-title">EMPRESAS PARCEIRAS</h1>
    <main>
      <div id="partnersCarousel" class="carousel slide carousel-dark" data-bs-ride="carousel" pause="true">
        <div class="carousel-inner" pause="true">
          <div v-for="(logo, index) in logosUrlArray" :key="index" class="carousel-item" :class="{'active': index === 0}">
            <img :src="logo" class="d-block w-100" alt="logo parceiro">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#partnersCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#partnersCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">

 const props = defineProps<{
   logosUrlArray: string[]
 }>()
</script>

<style scoped lang="scss">
  section.partners-container {
    // padding: 40px 200px !important;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .carousel-item {
    // display: flex;
    // justify-content: center;
    // align-content: center;
    img {
      min-width: 240px !important;
      margin: auto;
      max-width: 500px;
    }
  }
  // @media (max-width: 576px) {
  //   section.partners-container {
  //     padding: 0 !important;
  //   }
  // }
</style>