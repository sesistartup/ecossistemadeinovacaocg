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
      <div class="text-container">
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
  <footer class="ghp">
    <NoticiasRelacionadas />
  </footer>
  <FooterComponent/>
</template>

<script setup lang="ts">
  import Banner from '../../../components/general/Banner.vue'
  import NoticiasRelacionadas from '../../../components/noticias/NoticiasRelacionadas.vue';
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

    .text-container {
      width: 100%;
      max-width: 500px;
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0;
      }
      p {
        margin-bottom: 0;
        font-size: 1rem;
        max-height: 100px;
        height: 100%;
        overflow-y: auto;
      }
    }

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
      margin-top: 3rem;
      h1 {
        font-size: 2rem;
      }
      p.dark-body-text {
        font-weight: bolder;
        text-align: center;
        font-size: 1.2rem;
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
  @media (max-width: 1200px) {
  .noticia-expandida-banner{
    .text-container {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  }
  @media (max-width: 991px) {
    .noticia-expandida-banner{
      .text-container {
        max-width: 300px;
        h1 {
          font-size: 1.5rem;
        }
        p {
          max-height: 60px;
        }
      }
    }
  .noticia-expandida {
    header {
      margin-top: 2rem;
      h1 {
        font-size: 1.5rem;
      }
      p.dark-body-text {
        font-size: 1.2rem;
      }
    }
    .dark-body-text {
      font-size: 1rem;
      text-align: justify;
    }
    main {
      h3 {
        font-size: 1.5rem;
      }
    }
  }
  }
  @media (max-width: 768px) {
    .noticia-expandida-banner{
      .text-container {
        max-width: 200px;
        h1 {
          font-size: 1rem;
        }
        p {
          max-height: 40px;
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .noticia-expandida-banner{
      .text-container {
        h1 {
          font-size: 0.8rem;
        }
      }
    }
    .noticia-expandida {
      header {
        h1 {
          font-size: 1.3rem;
        }
        p.dark-body-text {
          font-size: 1rem;
        }
      }
      .dark-body-text {
        font-size: 1rem;
        text-align: justify;
      }
      main {
        h3 {
          font-size: 1.3rem;
        }
      }
    }
  }
</style>