import { defineStore } from "pinia";
import { faleConosco } from "./types";
import { CONSTANTES } from '../../utils/constantes'
import { validateFaleConoscoInput } from "../../utils/faleConosco/validation";
import { GeneralResponseHandler } from "../../utils/GeneralResponseHandler";
// import headers from "../../utils/headers";
import axios from "axios";

export const useComunicacaoStore = defineStore('comunicacaoStore', {
  state: () => {
    return {      
      faleConoscoResponse: new GeneralResponseHandler(0, 'none', 'no request made yet')
    }
  },
  actions: {
    async sendFaleConosco(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, setorId: number, mensagem: string) {
      try {
        const faleConoscoInput = validateFaleConoscoInput({nome, emailCorporativo, telefone, empresa, cargo, setorId, mensagem})
        if (faleConoscoInput instanceof faleConosco) {
          const response = await axios.post(CONSTANTES.defaultUrl + 'api/faleConosco/registrar',
          faleConoscoInput
          )
          this.faleConoscoResponse.putResponse(response.data.codigo, response.data.dado, response.data.mensagem);
        }
      } catch (error) {
        if (error instanceof TypeError) {
          this.faleConoscoResponse.putError(222, error.message);
        } else {
          this.faleConoscoResponse.putError(666, 'Entre em contato com a Startup do SESI');
        }
      }
      return false; // retorno que indica que a resposta chegou
    }
  },
  getters: {

  }
});