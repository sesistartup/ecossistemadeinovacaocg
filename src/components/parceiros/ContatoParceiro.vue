<template>
  <section class="contatos-parceiro ghp">
    <header>
      <h3 class="dark-title">
        Contato
      </h3>
    </header>
    <main class="boring-gray-border box">
      <nav id="anchors">
        <a class="light-body-text letter">{{ emailContato }}</a>
        <a class="light-body-text phone">{{ telefone }}</a>
        <a class="light-body-text world">{{ website }}</a>
        <a class="light-body-text pin">{{ endereco }}</a>
      </nav>
      <nav id="social">
        <a :href="instaLink" target="blank">
          <img src="/insta_icon.png" alt="">
        </a>
        <a :href="linkedinLink" target="blank">
          <img src="/linkedin_icon.png" alt="">
        </a>
      </nav>
    </main>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    instaLink: string
    linkedinLink: string
    wppLink: string
    emailContato: string
    telefone: string
    website: string
    endereco: string
  }>()
</script>

<style scoped lang="scss">
  section.contatos-parceiro {
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .box {
      background-color: #28353e;
      min-height: 300px;
      height: 100%;
      width: 600px;
      padding: 10px;
      margin-bottom: 3rem;
      display: flex;
      flex-direction: row;
      #anchors {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          font-size: 1rem;
          margin: 10px 0;
          text-align: justify;
        }
      }
      #social {
        width: 10%;
        display: flex;
        flex-direction: column;
        a {
          margin: 10px 0;
        }
        a > img {
          width: 40px;
        }
      }
      .pin, .world, .letter, .phone {
        padding-left: 35px;
        background-repeat: no-repeat;
        background-position: center left;
        background-size: contain
      }
      .pin {
        background-image: url('/parceiros/parceiro-expandido/pin_icon.png');
      }
      .world {
        background-image: url('/parceiros/parceiro-expandido/www_icon.png');
      }
      .letter {
        background-image: url('/parceiros/parceiro-expandido/letter_icon.png');
      }
      .phone {
        background-image: url('/parceiros/parceiro-expandido/phone_icon.png');
      }
    }
  }
</style>