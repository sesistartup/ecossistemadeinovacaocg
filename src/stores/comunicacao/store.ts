import { defineStore } from "pinia";
import { validateInput } from "./types";
// import { faleConosco } from "./types";
// import axios from "axios";

export const useComunicacaoStore = defineStore('comunicacaoStore', {
  // state: () => {
  //   return {      
  //     faleConoscoStore: faleConosco
  //   }
  // },
  actions: {
    async sendFaleConosco(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, mensagem: string) {
      try {
        const faleConoscoInput = validateInput(nome, emailCorporativo, telefone, empresa, cargo, mensagem)
        console.log(faleConoscoInput)
      } catch (error) {
        console.log(error)
      }
    }
  }
});