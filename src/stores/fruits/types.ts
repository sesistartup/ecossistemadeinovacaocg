interface fruitInterface {
  name: string,
  flavor: string,
  color: string,
  amount: number
}

export class Fruit implements fruitInterface{
  color!: string;
  amount!: number;
  name!: string;
  flavor!: string;

  constructor(color: string, amount: number, name: string, flavor: string) {
    this.color = color;
    this.amount = amount;
    this.name = name;
    this.flavor = flavor
  }
}