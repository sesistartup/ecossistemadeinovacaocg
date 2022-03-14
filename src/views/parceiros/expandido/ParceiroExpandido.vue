<template>
    <NavBar 
        :is-transparent="false"
    />
    <Banner
      path="/src/assets/parceiros/parceiro-expandido/background.png"
      figcaption="graphs"
      img-alt="partner page"
      max-height="352px"
    >
    <div class="d-flex h-100 w-100 partner-logo-container">
      <div class="box">
        <!-- TODO: setup state for partners -->
        <img v-if="hasLogo" src="" alt="Logo Parceiro" id="parceiro-logo">
        <h1 v-else class="dark-title">Logo<br>Parceiro</h1>
      </div>
    </div>
    </Banner>
    <ExpandedBody 
      :partner-name="dummyPartner.name"
      :first-paragraph="dummyPartner.firstParagraph"
      :sub-title="dummyPartner.subTitle"
      :second-paragraph="dummyPartner.secondParagraph"
    />
    <FooterComponent />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Banner from '../../../components/general/Banner.vue';
import ExpandedBody from '../../../components/parceiros/parceiroExpandido/ExpandedBody.vue';

const dummyPartner = reactive({
  name: 'EMPRESA FICTÍCIA',
  firstParagraph: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.',
  subTitle: 'LOREM IPSUM',
  secondParagraph: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.'
})

const hasLogo = ref(true) // Essa variável de controle supõe que a empresa parceira tem logo.

onMounted(() => { // Se algo der errado com a logo, então supoe-se que ela não o possui, e então o texto é exibido
  const logo: HTMLImageElement = document.querySelector('#parceiro-logo')!
  if (!logo.complete) {
    hasLogo.value = false
  }
})
</script>

<style scoped lang="scss">
  .partner-logo-container {
    position: absolute;
    top: 50px;
    align-items: center;
    justify-content: center;
    .box {
      background-color: #fff;
      max-height: 365px;
      min-height: 120px;
      height: 100%;
      max-width: 300px;
      min-width: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      h1.dark-title {
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 991px) {
    .partner-logo-container {
      h1.dark-title {
        font-size: 1rem !important;
      }
    }
  }
  @media (max-width: 576px) {
    .partner-logo-container {
      .box {
        max-width: 200px;
        max-height: 265px;
        min-height: 20px;
        min-width: 20px;
      }
      h1.dark-title {
        font-size: 0.5rem !important;
      }
    }
  }
  @media (max-width: 400px) {
    .partner-logo-container {
      .box {
        max-width: 100px;
      }
    }
  }
</style>