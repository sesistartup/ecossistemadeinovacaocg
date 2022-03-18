<template>
  <!-- <router-link to="/parceiros/id">clica aqui</router-link> -->
  <NavBar 
    :is-transparent="false"
  />
    <Banner
      path="/parceiros/banner.png"
      figcaption="parceiros do ecossistema"
      imgAlt="ecosystem partners"
      maxHeight="unset"
    >
      <div class="d-flex h-100 position-absolute top-0 ghp">
        <img src="/parceiros/parceiro_icon.png" alt="Fale Conosco">
        <h1 class="dark-title">PARCEIROS
          <p class="dark-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum esse tempora aspernatur, laudantium, quisquam officia nostrum iure impedit alias neque. Ad dicta reprehenderit perferendis laborum commodi iure assumenda sed?
          </p>
        </h1>
      </div>
    </Banner>
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
import Banner from '../../components/general/Banner.vue';
import { reactive } from 'vue';

  const parceirosContainers = reactive([
    {
      tipoInstituicao: 'UNIVERSIDADES',
      parceiros: [
        {
          hasLogo: true,
          logo: '/home/carousel/estacio.png',
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
          logo: '/home/carousel/estacio.png',
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
          logo: '/home/carousel/estacio.png',
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
  div.d-flex {
    justify-content: flex-start;
    align-items: center;
    img {
      max-width: 120px;
      min-width: 20px;
      width: 20%;
    }
    h1 {
      font-size: 2.5rem;
      text-align: start;
      margin-left: 2rem;
      p {
        font-size: 1rem;
        max-width: 450px;
        width: 100%;
        text-align: justify;
        margin-top: 10px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4; /* number of lines to show */
                  line-clamp: 4; 
          -webkit-box-orient: vertical;
      }
    }
  }
  @media (max-width: 1200px) {
    div.d-flex {
      h1 {
        font-size: 2rem;
        text-align: start;
        margin-left: 1.5rem;
        p {
          font-size: 0.8rem;
          max-width: 350px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    div.d-flex {
      padding: 0 100px;
      h1 {
        font-size: 1.5rem;
        text-align: start;
        margin-left: 1.5rem;
        p {
          max-width: 200px;
        }
      }
    }
  }
  @media (max-width: 768px) {
  div.d-flex {
    padding: 0 50px;
      h1 {
        font-size: 1rem;
        text-align: start;
        margin-left: 1rem;
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 576px) {
  div.d-flex {
      h1 {
        font-size: 0.8rem;
        text-align: start;
        margin-left: 0.8rem;
        margin-bottom: 0;
        p {
          max-width: 100px;
          text-align: start;
          margin-top: 0;
          -webkit-line-clamp: 3; /* number of lines to show */
                  line-clamp: 3; 
        }
      }
    }
  }
</style>