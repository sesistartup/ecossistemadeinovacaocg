<template>
  <section class="partner-body">
    <span class="dark-title">PARCEIRO DO ECOSSISTEMA</span>
    <main>
      <h1 class="dark-title">{{ partnerName }}</h1>
      <article class="dark-body-text">
        {{ firstParagraph }}
      </article>
    </main>
    <h2 class="dark-title">
      {{ subTitle }}
    </h2>
    <article class="dark-body-text">
      {{ secondParagraph }}
    </article>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  partnerName: {
    type: String,
    required: true,
    default: 'NOME DA EMPRESA'
  },
  firstParagraph: {
    type: String,
    required: true,
    default: 'body text'
  },
  subTitle: {
    type: String,
    required: false,
  },
  secondParagraph: {
    type: String,
    required: false
  }
})
</script>

<style scoped lang="scss">
  section.partner-body {
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    margin-bottom: 3rem;
    span {
      color: gray;
      margin-top: 4rem;
      font-size: 1.2rem;
    }
    main {
      h1 {
        font-size: 2rem;
        margin-top: 1rem;
      }
      article {
        margin-top: 3rem;
        margin-bottom: 2rem;
      }
    }
    h2[class="dark-title"] {
      margin-right: auto;
    }
    .dark-body-text {
      font-size: 1rem;
      text-align: justify;
    }
  }
</style>