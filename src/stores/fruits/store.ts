import { defineStore } from "pinia";
import { Fruit } from './types';
// import { inject } from "vue";
// import { CONSTANTES } from "../../utils/constantes";

// const axios = inject('$axios')

export const useFruitStore = defineStore('fruitStore', {
  state: () => {
    return {
      fruit: new Fruit('yellow', 5, 'banana', 'sweet')
      // fruitBasket: number = []
      // fruits: string[] = ['Apple', 'Orange', 'Banana'];
    }
  },
  getters: { // getters são como valores computados
    amountPlusOneWithoutThis: (state) => state.fruit.amount + 1,
    amountPlusOneWithThis(): number {
      return this.fruit.amount + 1 // usando this é necessário declarar o tipo do retorno
    },
    nowTheFruitIsPapaya: (state) => state.fruit.name = 'papaya'
  }
})