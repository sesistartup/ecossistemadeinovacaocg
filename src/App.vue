<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/general/HelloWorld.vue'
// import { useFruitStore } from './stores/fruits/store'
// import NavBar from './components/NavBar.vue';

// const fruitStore = useFruitStore() // atribuindo state

// console.log(fruitStore.$state.fruit)

// fruitStore.$patch({ // mutando state declarativamente
//   fruit: {
//     color: 'red',
//     flavor: 'sweet',
//     amount: 0,
//     name: 'apple'
//   }
// })

// console.log(fruitStore.$state.fruit)

// fruitStore.$patch((state) => { // mutando state por função
//   const name: string = state.fruit.name
//   if (name === 'apple') {
//     state.fruit.amount = 11
//   } else {
//     state.fruit.amount = 93
//   }
// })

// console.log(fruitStore.$state.fruit)

// // para acessar um getter, basta invocá-lo como se fosse propriedade de um objeto ou um método
// fruitStore.amountPlusOneWithoutThis
// fruitStore.amountPlusOneWithThis

// fruitStore.fetchData('https://pokeapi.co/api/v2/pokemon/ditto')
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: 'Gotham-Book';
  src: url(src/assets/fonts/Gotham\ Book.otf);
}
@font-face {
  font-family: 'Lulu-Bold';
  src: url(src/assets/fonts/FontsFree-Net-Lulo-Clean-W01-One-Bold.ttf);
}
.dark-title, .light-title {
  font-family: 'Lulu-Bold';
  font-size: 1.2rem;
}
.light-title {
  color: #fff
}
.dark-title {
  color: #000;
}
.dark-body-text, .light-body-text {
  font-family: 'Gotham-Book';
  font-size: 0.6rem;
}
.dark-body-text {
  color: #000;
}
.light-body-text {
  color: #fff;
}
</style>
