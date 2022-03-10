<template>
  <NavBar :is-transparent="true"/>
  <section class="container-fluid">
    <main>
      <figure>
        <img src="../assets/home/fundo.png" alt="workspace_image">
        <figcaption class="d-none">workspace_image</figcaption>
      </figure>
      <GeneralContainer
        title="SLOGAN PARA APRESENTAR QUEM SOMOS"
        :dark-title="true"
        :content-array="['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad adipisci reiciendis dignissimos soluta sed iusto fugiat suscipit enim. Esse vero beatae quia praesentium, repellendus doloremque provident maiores eum suscipit.', 'src/assets/home/people_and_postits.png']"
        :has-know-more-btn="true"
        bg-color="#f6f6f6"
        id="oi"
      />
    </main>
  </section>
  <FooterComponent />
</template>

<script setup lang="ts">
import GeneralContainer from '../components/general/GeneralContainer.vue';
import Banner from '../components/general/Banner.vue'

</script>

<style scoped lang="scss">
  section.container-fluid {
    padding: 0;
    main {
      figure {
        margin: 0;
        img {
          width: -webkit-fill-available;
          height: -webkit-fill-available
        }
      }
    }
  }
  // figure {
  //   background: url('../assets/home/fundo.png');
  // }
</style>