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
            Um ecossistema saudável se faz através da colaboração e interdependencia entre todos os membros. Por isso é tão importante a presença de todos os parceiros:
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
import { useParceirosStore } from '../../stores/parceiros/store';
import { onMounted, reactive } from 'vue';

  const parceirosContainers = reactive([
    {
      tipoInstituicao: 'ICTIs',
      parceiros: [
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/uems.png',
          logoAlt: 'uems',
          parceiroId: 2
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/ufms.png',
          logoAlt: 'ufms',
          parceiroId: 3
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/ict_grande.png',
          logoAlt: 'parceiro',
          parceiroId: 8
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/ict_ms.png',
          logoAlt: 'parceiro',
          parceiroId: 17
        }
      ]
    },
    {
      tipoInstituicao: 'EMPRESAS',
      parceiros: [
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/arteiras.png',
          logoAlt: 'parceiro',
          parceiroId: 16
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/logo_eng.png',
          logoAlt: 'parceiro',
          parceiroId: 9
        }
      ]
    },
    {
      tipoInstituicao: 'MECANISMOS DE INOVAÇÃO',
      parceiros: [
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/logo_startup.png',
          logoAlt: 'parceiro',
          parceiroId: 19
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/aginova.png',
          logoAlt: 'parceiro',
          parceiroId: 4
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/ucdb.jpg',
          logoAlt: 'ucdb',
          parceiroId: 1
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/incubadora_municipal.png',
          logoAlt: 'parceiro',
          parceiroId: 13
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/ecoinova.png',
          logoAlt: 'parceiro',
          parceiroId: 14
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/livinglab.png',
          logoAlt: 'parceiro',
          parceiroId: 15
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/pime.png',
          logoAlt: 'parceiro',
          parceiroId: 10
        }
      ]
    },
    {
      tipoInstituicao: 'GOVERNO',
      parceiros: [
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/fundect.png',
          logoAlt: 'parceiro',
          parceiroId: 7
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/semagro.png',
          logoAlt: 'parceiro',
          parceiroId: 11
        }
      ]
    },
    {
      tipoInstituicao: 'SOCIEDADE ORGANIZADA',
      parceiros: [
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/logo_fiems.jpg',
          logoAlt: 'parceiro',
          parceiroId: 18
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/famasul_senar_sindicatos.png',
          logoAlt: 'parceiro',
          parceiroId: 5
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/fecomercio.png',
          logoAlt: 'parceiro',
          parceiroId: 6
        },
        {
          hasLogo: true,
          logo: '/chumbado/home_parceiros/senai.png',
          logoAlt: 'parceiro',
          parceiroId: 12
        }
      ]
    }
  ])
  const parceirosStore = useParceirosStore()
  const getPartnerInfos = async () => {
    parceirosStore.$reset()
    const res = await fetch('/chumbado/parceiro_expandido/parceiros.json')
    const infos = await res.json()
    for (const i of infos) {
      parceirosStore.setPartner(i)
    }
  }
  onMounted(() => {
    getPartnerInfos()
  })
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