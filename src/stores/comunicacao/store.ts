import { defineStore } from "pinia";
import { validateInput } from "./types";
import { faleConosco } from "./types";
import { CONSTANTES } from '../../utils/constantes'
// import headers from "../../utils/headers";
import axios from "axios";

export const useComunicacaoStore = defineStore('comunicacaoStore', {
  // state: () => {
  //   return {      
  //     faleConoscoStore: faleConosco
  //   }
  // },
  actions: {
    async sendFaleConosco(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, setor: number, mensagem: string) {
      console.log(typeof (setor))
      try {
        const faleConoscoInput = validateInput({nome, emailCorporativo, telefone, empresa, cargo, setor, mensagem})
        console.log(faleConoscoInput)
        if (faleConoscoInput instanceof faleConosco) {
          const response = await axios.post(CONSTANTES.defaultUrl + 'api/faleConosco/registrar',
          faleConoscoInput
          )
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
});