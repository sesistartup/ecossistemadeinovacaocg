<!-- este componente é um container de prósito geral segmentado por colunas que recebe título, imagem (ou não) e textos. -->
<template>
  <section class="container-fluid general-container ghp" :id="id">
    <h1 :class="[ darkTitle ? 'dark-title' : 'light-title' ]" class="mb-5">{{ title }}</h1>
    <main class="d-flex">
      <div v-for="(content, index) in contentArray" :key="index" :class="isUrl(content) ? 'is-img' : 'is-article'">
        <img v-if="isUrl(content)" :src="content" alt="ilustrative-image">
        <article v-else :class="[ darkTitle ? 'dark-body-text' : 'light-body-text' ]">
          {{ content }}
          <GeneralBtn v-if="hasKnowMoreBtn"
            btnText="SAIBA MAIS"
            :isExternalLink="false"
            link="/quem-somos"
            bgColor="#629282"
            width="150px"
            textColor="#fff"
            height="30px"
            id="home-saiba-mais"
          />
        </article>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import GeneralBtn from '../buttons/GeneralBtn.vue';

  const props = defineProps<{
    title: string
    darkTitle: boolean
    hasKnowMoreBtn: boolean
    contentArray: string[]
    bgColor: string
    id: string
  }>()

const isUrl = (text: string) => {
  const lastChars = text.length - 5
  if (text.includes('.jpg', lastChars) || text.includes('.png', lastChars) || text.includes('.svg', lastChars) || text.includes('.jpeg', lastChars)) {
    return true
  }
  return false
}
onMounted(() => {
  const container: HTMLElement = document.querySelector('#' + props.id)!
  container.style.backgroundColor = props.bgColor
})
</script>

<style scoped lang="scss">
  section.general-container {
    padding-top: 40px !important;
    padding-bottom: 40px !important; 
  }
  main.d-flex > div {
    flex: 1 1 0;
    img {
      width: 100%;
    }
  }
  main.d-flex > div {
    display: flex;
    align-items: center;
  }
  .is-article article {
    font-size: 1rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    max-height: inherit;
    overflow-y: auto;
    padding-right: 10px;
  }
  @media (max-width: 991px) {
    .is-article article {
      max-height: 250px;
    }
  }
  @media (max-width: 767px) {
    section.general-container {
      padding-top: 20px !important;
      padding-bottom: 20px !important; 
      h1 {
        font-size: 1.2rem;
      }
    }
    .is-article article {
      max-height: 200px;
    }
  }
  @media (max-width: 576px) {
    section.general-container {
      h1 {
        font-size: 1rem;
      }
    }
    main.d-flex {
      flex-direction: column;
      div.is-article {
        margin-bottom: 10px;
      }
    }
    main.d-flex > div.is-img {
      display: none;
    }
    section > h1 {
      margin-bottom: 1.5rem !important;
    }
  }
</style>