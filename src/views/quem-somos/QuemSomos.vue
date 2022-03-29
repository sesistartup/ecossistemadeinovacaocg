<template>
  <NavBar :is-transparent="false"/>
  <section class="quem-somos">
    <Banner
      path="/quem-somos/banner.png"
      figcaption="about-us"
      img-alt="sobre nós"
    >
      <div class="d-flex h-100 ghp">
        <!-- <h1 class="dark-title">SLOGAN PARA<br>APRESENTAR<br>QUEM SOMOS</h1> -->
        <h1 class="dark-title">ECOSSISTEMA LOCAL<br>DE INOVAÇÃO<br>CAMPO GRANDE – MS</h1>
        <p class="dark-body-text">
          Uma comunidade pronta para contribuir com o seu desenvolvimento!
        </p>
      </div>
    </Banner>
    <GeneralContainer 
      title="DE ONDE SURGIMOS"
      :darkTitle="true"
      :hasKnowMoreBtn="false"
      :contentArray="ourStoryContentArray"
      bgColor="#f6f6f6"
      id="our-story"
    />
    <GeneralContainer 
      title="NOSSO PROPÓSITO"
      :darkTitle="true"
      :hasKnowMoreBtn="false"
      :contentArray="moreAboutUs"
      bgColor="#fff"
      id="more-about-us"
    />
  </section>
  <FooterComponent />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Banner from '../../components/general/Banner.vue';
import GeneralContainer from '../../components/general/GeneralContainer.vue';

const ourStoryContentArray = reactive([
  'O Ecossistema Local de Inovação – Campo Grande – MS, surge do desejo das instituições e unificar as competências tecnológicas de CAMPO GRANDE na direção do incentivo a inovação e tecnologia. Foi feito um estudo preliminar, para apurar o que temos de capacidade tecnológica e ciências para que essas capacidades sejam mais trabalhadas em prol do desenvolvimento socioeconômico de Campo Grande - MS. A partir disso, foi identificado que existem empresas que ainda não se beneficiam da capacidade tecnológica das instituições de ciência, tecnologia e inovação. Ou seja, mapeamos uma distância que pode ser aproveitada! Um grande grupo de apoio forma-se aqui para que as para que as ações sejam mais rápidas, efetivas e integradas em busca de melhorar a capacidade da inovação tecnológica e trazer o conhecimento para todos sobre as leis e benefícios proporcionados pela legislação.',
  '/quem-somos/our_story.png'
])
const moreAboutUs = reactive([
  '/quem-somos/more_about_us.png',
  'Disponibilizar caminhos norteadores para todos que desejam empreender, crescer e inovar, independente do formato ou tamanho do negócio.  Nosso foco é nos tornarmos referência como polo científico e tecnológico para o Brasil.'
])
</script>

<style scoped lang="scss">
  section.quem-somos {
    div.d-flex {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      top: 0;
      h1 {
        font-size: 3rem;
        text-align: start;
      }
      p {
        text-align: justify;
        font-size: 1.5rem;
        max-width: 500px;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
      }
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: rgba($color: #ddd, $alpha: 1);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  @media (max-width: 1450px) {
    section.quem-somos {
      div.d-flex {
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1rem;
          max-width: 400px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    section.quem-somos {
      div.d-flex {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 0.8rem;
          max-width: 350px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    section.quem-somos {
      div.d-flex {
        h1 {
          font-size: 1.5rem;
        }
        p {
          font-size: 0.8rem;
          max-width: 250px;
          max-height: 150px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    section.quem-somos {
      div.d-flex {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.6rem;
          max-width: 170px;
          max-height: 100px;
        }
      }
    }
  }
</style>