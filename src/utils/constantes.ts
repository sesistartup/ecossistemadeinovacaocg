import { InjectionKey } from "vue";
import { AxiosInstance } from "axios";

export const CONSTANTES: Object = {
  defaultUrl: 'https://pokeapi.co/api/v2/pokemon/ditto'
}

export const AxiosKey: InjectionKey<AxiosInstance> = Symbol('http')