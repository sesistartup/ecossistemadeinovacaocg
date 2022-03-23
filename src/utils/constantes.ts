import { InjectionKey } from "vue";
import { AxiosInstance } from "axios";

export const CONSTANTES = {
  defaultUrl: 'https://localhost:7033/'
}

export const AxiosKey: InjectionKey<AxiosInstance> = Symbol('http')