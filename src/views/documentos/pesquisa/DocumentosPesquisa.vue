<template>
	<NavBar :is-transparent="false" />
  <Banner
    path="/documentos/pesquisas.png"
    img-alt="documentos hub"
    figcaption="cover documentos"
  >
    <div class="banner-documentos-content ghp">
      <img src="/documentos/pesquisas-icon.png" alt="icon">
      <div class="banner-text-container">
        <h1 class="dark-title">PESQUISAS</h1>
        <p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
      </div>
    </div>
  </Banner>
  <section id="pesquisa-documento" class="container-fluid">
    <main class="ghp row mt-5 mb-5">
      <div v-for="(doc, index) in docsToShow" class="col-12 col-sm-6 col-lg-4 w-fit-content">
        <CardDocumento
          :title="doc.title"
          iconPath="none"
          :text="doc.text"
          :hasIcon="false"
          :contentToDownload="doc.download"
          :hasDownload="true"
        />
      </div>
    </main>
  </section>
  <FooterComponent />
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import Banner from '../../../components/general/Banner.vue';
import CardDocumento from '../../../components/documentos/CardDocumento.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
  const dummyResearchs = reactive([
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA PESQUISA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    }
  ])
  const dummyLaws = reactive([
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DA LEI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    }
  ])
  const dummyEdicts = reactive([
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    },
    {
      title: 'NOME DO EDITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel quidem reprehenderit iste vero exercitationem veniam! Eveniet eius sequi dolorem cupiditate? Porro alias harum similique aliquid eos soluta deserunt distinctio?',
      download: ''
    }
  ])
  const docsToShow = computed(() => {
    if (route.params.tipoDocumento === 'pesquisas') return dummyResearchs
    else if (route.params.tipoDocumento === 'editais') return dummyEdicts
    else return dummyLaws
  })
</script>

<style scoped lang="scss">
  .banner-documentos-content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 10%;
      min-width: 60px;
      max-width: 128px;
      margin-right: 24px;
    }
    .banner-text-container {
      > h1 {
        text-align: start;
      }
      margin-left: 10px;
    }
  }
  section#pesquisa-documento {
    main {
      justify-content: space-between;
      .w-fit-content {
        width: fit-content !important;
      }
    }
  }
  @media (max-width: 991px) {
    section#pesquisa-documento {
      main {
        justify-content: space-around;
      }
    } 
  }
</style>