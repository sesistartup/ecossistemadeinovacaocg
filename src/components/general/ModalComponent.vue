<template>
<div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-keyboard="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="status" :id="status" />
        <h5 class="modal-title m-auto" id="exampleModalLabel">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{ message }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary m-auto" data-bs-dismiss="modal">Fechar</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  title: string
  message: string
  status: string
  modalId: string
}>()

</script>

<style scoped lang="scss">
  .btn-close {
    position: absolute;
    right: 20px;
  }
  .status {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  div[id="success"] {
    background-color: lightgreen;
  }
  div[id="warning"] {
    background-color: yellow;
  }
  div[id="error"] {
    background-color: red;
  }

</style>