<template>
  <form action="submit" class="fale-conosco ghp" @submit.prevent="comunicacaoStore.sendFaleConosco(contactForm.nome, contactForm.emailCorporativo, contactForm.telefone, contactForm.empresa, contactForm.cargo, contactForm.mensagem)">
    <input class="form-control boring-gray-border" v-model="contactForm.nome" type="text" name="person-name" id="name-input" placeholder="Nome">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.emailCorporativo" type="text" name="corporate-email" id="email-input" placeholder="E-mail corporativo">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.telefone" type="tel" name="phone" id="phone" placeholder="Telefone (Cód área + Número)" maxlength="11">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.empresa" type="text" name="company" id="company-input" placeholder="Empresa">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.cargo" type="text" name="job-position" id="cargo-input" placeholder="Cargo">
    <textarea class="form-control boring-gray-border" v-model="contactForm.mensagem" name="message" id="message" cols="30" rows="10" placeholder="Mensagem"></textarea>
    <button type="submit" class="green-btn">ENVIAR</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useComunicacaoStore } from '../../stores/comunicacao/store';

  const comunicacaoStore = useComunicacaoStore();

  const contactForm = ref({
    nome: '',
    emailCorporativo: '',
    telefone: '',
    empresa: '',
    cargo: '',
    mensagem: ''
  });

  // comunicacaoStore.sendFaleConosco(contactForm.value.nome, contactForm.value.emailCorporativo, contactForm.value.telefone, contactForm.value.empresa, contactForm.value.cargo, contactForm.value.mensagem);
</script>

<style scoped lang="scss">
  form.fale-conosco {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    input.half-size {
      width: 49%;
      margin-right: 1%;
      margin-left: 1%;
    }
    input.half-size:nth-child(even) {
      margin-left: 0 !important;
    }
    input.half-size:nth-child(odd) {
      margin-right: 0 !important;
    }
    .form-control {
      margin-top: 10px;
      height: 50px;
    }
    textarea[class="form-control"] {
      min-height: 300px;
    }
    .green-btn {
      margin-left: auto;
      margin-top: 10px;
      color: #fff;
      border-radius: 25px;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    form.fale-conosco {
      input.half-size {
        margin-right: 0;
        margin-left: 0;
        width: 100%;
      }
    }
  }
</style>