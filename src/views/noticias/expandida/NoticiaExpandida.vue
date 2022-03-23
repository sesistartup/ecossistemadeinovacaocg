<template>
  <NavBar 
    :is-transparent="false"
  />
  <Banner
    path="/noticias/banner.png"
    figcaption="workspace_image"
    img-alt="workspace_image"
  >
    <div class="noticia-expandida-banner ghp">
      <img src="/noticias/icone-noticia.png" alt="icon">
      <div>
        <h1 class="dark-title">Notícias</h1>
        <p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
      </div>
    </div>
  </Banner>
  <section class="noticia-expandida ghp">
    <header class="d-flex">
      <h1 class="dark-title">NOME DA NOTÍCIA</h1>
      <p class="dark-body-text">RESUMO DA NOTÍCIA</p>
      <time>dd/mm/yy ndpvnp</time>
    </header>
    <img class="w-100" src="/noticias/noticia-expandida/cover.png" alt="capa da notícia">
    <p id="first-paraghap" class="dark-body-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime quo fugit. Numquam delectus nobis consequatur maxime quidem corporis laborum! Quasi architecto beatae veritatis autem harum exercitationem consequatur sint consequuntur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime quo fugit. Numquam delectus nobis consequatur maxime quidem corporis laborum! Quasi architecto beatae veritatis autem harum exercitationem consequatur sint consequuntur.
    </p>
    <main>
      <h3 class="dark-title">LOREM IPSUM</h3>
      <article class="dark-body-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum quos exercitationem nobis, nemo autem molestiae! Deserunt cupiditate vel impedit a quaerat ut nobis asperiores deleniti, nostrum minima ea obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum quos exercitationem nobis, nemo autem molestiae! Deserunt cupiditate vel impedit a quaerat ut nobis asperiores deleniti, nostrum minima ea obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum quos exercitationem nobis, nemo autem molestiae! Deserunt cupiditate vel impedit a quaerat ut nobis asperiores deleniti, nostrum minima ea obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum quos exercitationem nobis, nemo autem molestiae! Deserunt cupiditate vel impedit a quaerat ut nobis asperiores deleniti, nostrum minima ea obcaecati.
      </article>
      <h3 class="dark-title">LOREM IPSUM</h3>
      <img src="/noticias/noticia-expandida/fakevideo.png" alt="fake-video" class="w-100">
    </main>
  </section>
  <FooterComponent/>
</template>

<script setup lang="ts">
  import Banner from '../../../components/general/Banner.vue'
</script>

<style scoped lang="scss">
  .noticia-expandida-banner{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding-left: 64px;

    display: flex;
    align-items: center;

    > img {
      width: 10%;
      min-width: 60px;
      max-width: 128px;
      margin-right: 24px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 400px;

      p {
        text-align: start;
        font-size: 12px;
      }
    }
  }
  .noticia-expandida {
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
      flex-direction: column;
      p {
        font-weight: bolder;
      }
    }
    .dark-body-text {
      font-size: 1rem;
      text-align: justify;
    }
    main {
      h3 {
        text-align: start;
        margin-top: 2rem;
      }
    }
  }
</style>