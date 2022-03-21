import { nameIsValid, emailIsValid, phoneIsValid } from './faleConosco'

interface faleConoscoInterface {
  nome: string
  emailCorporativo: string
  telefone: string
  empresa: string
  cargo: string
  setor: number
  mensagem: string
}

export class faleConosco implements faleConoscoInterface {
  nome!: string;
  emailCorporativo!: string;
  telefone!: string;
  empresa!: string;
  cargo!: string;
  setor!: number;
  mensagem!: string;
  
  constructor(nome: string, emailCorporativo: string, telefone: string, empresa: string, cargo: string, setor: number, mensagem: string) {
    [ this.nome, this.emailCorporativo, this.telefone, this.empresa, this.cargo, this.setor, this.mensagem ] = arguments
  };
}

export const validateInput = ({nome, emailCorporativo, telefone, empresa, cargo, setor, mensagem}: faleConoscoInterface): TypeError | faleConosco => {
  if (!nameIsValid(nome)) return TypeError("Insira um nome válido.");
  if (!emailIsValid(emailCorporativo)) return TypeError("Insira um e-mail válido.");
  if (!phoneIsValid(telefone)) return TypeError("Insira um telefone válido.");
  return new faleConosco(nome, emailCorporativo, telefone, empresa, cargo, setor, mensagem);
}