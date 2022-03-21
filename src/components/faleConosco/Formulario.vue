<template>
  <form action="submit" class="fale-conosco ghp">
    <input class="half-size form-control boring-gray-border" pattern="[A-Za-z]" v-model="contactForm.nome" type="text" name="person-name" id="name-input" placeholder="Nome">
    <select class="half-size form-control form-select boring-gray-border" v-model="contactForm.setor" aria-label="Default select example">
      <option selected value="0">Open this select menu</option>
      <option value="">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <input class="half-size form-control boring-gray-border" v-model="contactForm.emailCorporativo" type="text" name="corporate-email" id="email-input" placeholder="E-mail corporativo">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.telefone" type="tel" name="phone" id="phone" placeholder="Telefone (Cód área + Número)" maxlength="11" @keyup="evalNumberInput($event)">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.empresa" type="text" name="company" id="company-input" placeholder="Empresa">
    <input class="half-size form-control boring-gray-border" v-model="contactForm.cargo" type="text" name="job-position" id="cargo-input" placeholder="Cargo">
    <textarea class="form-control boring-gray-border" v-model="contactForm.mensagem" name="message" id="message" cols="30" rows="10" placeholder="Mensagem"></textarea>
    <button type="button" @click="sendEmail()" class="green-btn">ENVIAR</button>
  </form>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useComunicacaoStore } from '../../stores/comunicacao/store';

  const comunicacaoStore = useComunicacaoStore();

  const contactForm = ref({
    nome: '',
    emailCorporativo: '',
    telefone: '',
    empresa: '',
    cargo: '',
    setor: 0,
    mensagem: ''
  });
  const sendEmail = () => {
    comunicacaoStore.sendFaleConosco(contactForm.value.nome, contactForm.value.emailCorporativo, contactForm.value.telefone, contactForm.value.empresa, contactForm.value.cargo, contactForm.value.setor, contactForm.value.mensagem)
  }
  const evalNumberInput = (e: KeyboardEvent) => {
    if (isNaN(parseInt(e.key))) {
      contactForm.value.telefone = contactForm.value.telefone.slice(0, contactForm.value.telefone.indexOf(e.key))
    }
  }
</script>

<style scoped lang="scss">
  form.fale-conosco {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    input.half-size, select.half-size {
      width: 49%;
      margin-right: 1%;
      margin-left: 1%;
    }
    .half-size:nth-child(even) {
      margin-left: 0 !important;
    }
    .half-size:nth-child(odd) {
      margin-right: 0 !important;
    }
    .form-control {
      margin-top: 10px;
      height: 50px;
    }
    textarea.form-control {
      min-height: 150px;
      margin-left: 1%;
      margin-right: 1%;
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