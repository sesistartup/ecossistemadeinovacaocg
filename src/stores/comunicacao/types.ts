interface faleConoscoInterface {
  nome: string
  emailCorporativo: string
  telefone: string
  empresa: string
  cargo: string
  mensagem: string
}

export class faleConosco implements faleConoscoInterface {
  nome!: string;
  emailCorporativo!: string;
  telefone!: string;
  empresa!: string;
  cargo!: string;
  mensagem!: string;
  
  constructor(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, mensagem: string) {
    [ this.nome, this.emailCorporativo, this.telefone, this.empresa, this.cargo, this.mensagem ] = arguments
  };
}

export const validateInput = ({nome, emailCorporativo, telefone, empresa, cargo, mensagem}: faleConoscoInterface): TypeError | faleConosco => {
  // if (!nome
  //   || !ec 
  //   || !tel 
  //   || !emp
  //   || !cargo
  //   || !msg) {
  //   return new TypeError("Por favor, confira os dados e tente novamente");
  // };
  return new faleConosco(nome, emailCorporativo, telefone, empresa, cargo, mensagem) ;
}