<template>
  <footer class="container-fluid">
    <div class="img-container">
      <img src="../assets/logo_with_text.png" alt="white_logo">
      <div class="social d-lg-none">
        <a href="">
          <img src="../assets/linkedin_icon.png" alt="linkedin">
        </a>
        <a href="">
          <img src="../assets/wpp_icon.png" alt="whatsapp">
        </a>
        <a href="">
          <img src="../assets/insta_icon.png" alt="instagram">
        </a>
      </div>
    </div>
    <div class="container-list">
      <ul v-for="(item, itemIndex) in info" :key="itemIndex">
        <span class="light-title">{{ item.title }}</span>
        <li class="light-body-text" v-for="(info, infoIndex) in item.infos" :key="infoIndex">
          {{ info }}
        </li>
      </ul>
      <ul class="social">
        <li class="text-start">
          <span class="light-title">FALE CONOSCO</span>
        </li>
        <li>
          <a href="">
            <img src="../assets/linkedin_icon.png" alt="linkedin">
          </a>
          <a href="">
            <img src="../assets/wpp_icon.png" alt="whatsapp">
          </a>
          <a href="">
            <img src="../assets/insta_icon.png" alt="instagram">
          </a>
        </li>
      </ul>
    </div>
    <div class="vertical-container-list d-md-none">
      <ul>
        <li class="light-body-text"  v-for="(item, itemIndex) in info" :key="itemIndex">
          <span :id="'topico' + itemIndex" class="light-title" @click="showItems(itemIndex)">{{ item.title }}</span>
        </li>
      </ul>
      <div v-for="(item, index) in info.length">
        <ul v-if="selectedItem === item - 1">
          <li v-for="infoItens in info[selectedItem].infos" class="light-body-text">
            {{ infoItens }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const selectedItem = ref(0)
const menusFooter = reactive(new Array)

function showItems(index: number) {
  selectedItem.value = index;

  menusFooter.forEach((item) => { // Itera sobre o menu de itens para remover o highlight de outro item e reforçar o item clicado
    if (item.classList.contains('highlight')) {
      item.classList.remove('highlight')
    }
    if (item.id === 'topico' + index) {
      item.classList.add('highlight')
    }
  })
}

onMounted(() => {
  // popula uma array com os elementos do footer para mudar seu background, indicando ao usuário onde clicou
  for (const item in info) {
    const el: HTMLElement = document.querySelector('#topico' + item)!

    if (parseInt(item) === 0) {
      el.classList.add('highlight')
    }

    menusFooter.push(el)
  }
})

const info = [
  {
    title: 'QUEM SOMOS',
    infos: ['WHO ARE WE', 'lorem ispum', 'lorem ispum']
  },
  {
    title: 'PARCEIROS',
    infos: ['PARTNERS', 'lorem ispum', 'lorem ispum']
  },
  {
    title: 'NOTÍCIAS',
    infos: ['NEWS', 'lorem ispum', 'lorem ispum']
  },
  {
    title: 'DOCUMENTOS',
    infos: ['DOCS', 'lorem ispum', 'lorem ispum']
  },
  {
    title: 'AGENDA',
    infos: ['SCHEDULE', 'lorem ispum', 'lorem ispum']
  }
]

</script>

<style scoped lang="scss">
  footer {
    background-color: #28353e;
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 160px;
  }
  ul {
    margin-bottom: 0;
    list-style-type: none;
      height: 80px;
    span, li {
      color: #fff;
    }
  }
  .container-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .img-container {
    height: 80px;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      min-width: 165px;
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    li {
      text-align: start;
    }
    a {
      img {
        width: 20%;
        min-width: 25px;
      }
    }
    a:nth-child(2n) {
      margin: 0 10px;
    }
    
  }
  .light-body-text {
    font-size: 0.8rem;
  }
  .light-title {
    font-size: 0.6rem;
  }
  .light-body-text, .light-title {
    white-space: nowrap;
  }
  .vertical-container-list {
    display: flex;
    height: 120px;
    ul {
      li {
        text-align: start;
        margin: 5px 0;

        span:hover {
          cursor: pointer;
        }
      }
    }
  }
  .highlight {
    background: radial-gradient(#e66465, #28353e);
  }
  @media (min-width: 1920px) {
    .container-list {
      width: unset;
      justify-content: center;
    }
  }
  @media (max-width: 1068px) {
    .img-container {
      width: 200px;
    }
  }
  @media (max-width: 991px) {
    .img-container {
      padding-right: 20px;
      display: flex;
      flex-direction: column;
    }
    ul.social {
      display: none;
    }
    div.social {
      flex-direction: row;
      margin-top: 20px;
      a:nth-child(2n) {
        margin: 0;
      }
    }
  }
  @media (max-width: 768px) {
    .container-list {
      display: none;
    }
  }
  @media(max-width: 456px) {
    footer {
      flex-direction: column;
      height: fit-content;
    }
    .img-container {
      border-right: none;
    }
    .vertical-container-list {
      margin-top: 20px;
    }
  }
</style>