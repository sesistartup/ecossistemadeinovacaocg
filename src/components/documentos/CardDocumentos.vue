<template>
  <div class="card-documentos-content">
    <div>
      <img :src="iconPath" />
      <h1>{{title}}</h1>
    </div>
    

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nobis expedita quod repellendus, pariatur consectetur quam omnis distinctio architecto sint ipsa delectus quisquam iure iste excepturi, aliquid, velit optio corporis.</p>

    <button>Ver mais</button>
  </div>
</template>

<script setup lang="ts">

  const documentosProps = defineProps({
    title: String,
    iconPath: String,
  })

</script>

<style lang="scss" scoped>
.card-documentos-content {
  width: 100%;
  border: 1px solid black;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;

    h1 {
      margin: 0;
      margin-left: 12px;
      font-weight: bold;
      font-size: 26px;
      text-transform: uppercase;
    }

    img {
      width: 36px;
      height: 32px;
    }
  }

  > p {
    margin: 20px 0;
    text-align: justify;
  }

  > button {
    padding: 4px 24px;
    align-self: center;
    border-radius: 20px;
    border: 0;
    background-color: #c88944;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }
}
</style>