import { InjectionKey } from "vue";
import { AxiosInstance } from "axios";

export const CONSTANTES = {
  defaultUrl: 'https://www.devintegra.sesims.com.br' // FIXME: when possible, change to ecossistema api url
}

export const AxiosKey: InjectionKey<AxiosInstance> = Symbol('http')