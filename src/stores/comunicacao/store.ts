import { defineStore } from "pinia";
import { faleConosco, SetorInterface } from "./types";
import { CONSTANTES } from '../../utils/constantes'
import { validateFaleConoscoInput } from "../../utils/faleConosco/validation";
import { GeneralResponseHandler } from "../../utils/GeneralResponseHandler";
// import headers from "../../utils/headers";
import axios from "axios";

export const useComunicacaoStore = defineStore('comunicacaoStore', {
  state: () => {
    return {      
      faleConoscoResponse: new GeneralResponseHandler(0, 'none', 'no request made yet'),
      faleConoscoSetores: new Array<SetorInterface>()
    }
  },
  actions: {
    async sendFaleConosco(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, setorId: number, mensagem: string) {
      try {
        const faleConoscoInput = validateFaleConoscoInput({nome, emailCorporativo, telefone, empresa, cargo, setorId, mensagem})
        if (faleConoscoInput instanceof faleConosco) {
          const response = await axios.post(CONSTANTES.defaultUrl + '/api/faleConosco/registrar',
          faleConoscoInput
          )
          this.faleConoscoResponse.putResponse(response.data.codigo, response.data.dado, response.data.resposta);
        } else {
          this.faleConoscoResponse.putError(223, faleConoscoInput.message);
        }
      } catch (error) {
        if (error instanceof TypeError) {
          this.faleConoscoResponse.putError(222, error.message);
        } else {
          this.faleConoscoResponse.putError(661, 'Entre em contato com a Startup do SESI');
        }
      }
      return false; // retorno que indica que a resposta chegou
    },
    async getFaleConoscoSetores() {
      try {
        const response = await axios.get(CONSTANTES.defaultUrl + '/api/faleConoscoSetor/ObterFaleConoscoSetores');
        this.faleConoscoResponse.putResponse(response.data.codigo, response.data.dado, response.data.resposta);
        if (response.data.codigo === 200) {
          this.faleConoscoSetores = []
          this.faleConoscoResponse.dado.forEach((e: SetorInterface) => {
            this.faleConoscoSetores.push(e);
          });
        }
      } catch (error) {
        this.faleConoscoResponse.putError(661, 'check console')
        console.log(error)
      }
      return false; // retorno que indica que a resposta chegou
    }
  },
  getters: {

  }
});