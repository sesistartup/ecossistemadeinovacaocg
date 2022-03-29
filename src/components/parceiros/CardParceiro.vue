<template>
  <div class="card-parceiro" @click="$router.push({ name: 'ParceiroExpandido', params: { parceiroId: cardParceiro.parceiroId }})">
    <img v-if="cardParceiro.hasLogo" :src="cardParceiro.logo" :alt="cardParceiro.logoAlt">
    <span v-else>{{ cardParceiro.parceiroId }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  cardParceiro: {
    hasLogo: boolean
    logo: string
    logoAlt: string
    parceiroId: number
  }
}>()

</script>

<style scoped lang="scss">
  .card-parceiro {
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    // margin: 10px;
    img {
      width: inherit;
      max-height: 220px;
    }
  }
  .card-parceiro:hover {
    cursor: pointer;
    box-shadow: 0 0 30px 5px gray;
  }
</style>