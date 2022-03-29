<script setup lang="ts">
import Cookies from './components/general/Cookies.vue'
</script>

<template>
  <router-view />
  <Cookies />
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
  src: url(/fonts/Gotham\ Book.otf);
}
@font-face {
  font-family: 'Lulu-Bold';
  src: url(/fonts/FontsFree-Net-Lulo-Clean-W01-One-Bold.ttf);
}
.dark-title, .light-title {
  font-family: 'Lulu-Bold';
  font-size: 1.5rem;
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
.green-btn {
  border: none;
  font-family: 'Lulu-Bold';
  background-color: #49907f;
}
.green-btn:hover {
  background-color: aquamarine;
}
.ghp { // general horizontal padding
  padding: 0 150px !important;
}
.boring-gray-border {
  border-radius: 0 !important;
  border: 3px solid lightgray !important;
}
.ml-auto {
  margin-left: auto
}
.mr-auto {
  margin-right: auto;
}
.banner-text-container {
  width: 100%;
  max-width: 500px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  p {
    text-align: start;
    font-size: 1rem !important;
    max-height: 100px;
    height: 100%;
    margin-bottom: 0;
    overflow-y: auto;
  }
}
@media (max-width: 1200px) {
  .banner-text-container {
    h1 {
      font-size: 2rem;
    }
    p {
      text-align: start;
      font-size: 1rem !important;
      max-height: 60px;
    }
  }
}
@media (max-width: 991px) {
  .ghp {
    padding: 0 100px !important;
  }
  .banner-text-container {
    max-width: 300px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      text-align: start;
      font-size: 0.8rem !important;
      max-height: 60px;
    }
  }
}
@media (max-width: 768px) {
  .ghp {
    padding: 0 50px !important;
  }
  .banner-text-container {
    max-width: 200px;
    h1 {
      font-size: 1rem;
    }
    p {
      text-align: start;
      font-size: 0.7rem !important;
      max-height: 60px;
    }
  }
}
@media (max-width: 576px) {
  .ghp {
    padding: 0 15px !important;
  }
  .banner-text-container {
    max-width: 150px;
    h1 {
      font-size: 0.8rem;
    }
    p {
      text-align: start;
      font-size: 0.6rem !important;
      max-height: 40px;
    }
  }
}
</style>
