export interface Cart {
  products: { [key: string]: ProductCount };
}

export type ProductCount = number;

export enum ProductType {
  Cucumber = 'Cucumber',
  Pumpkin = 'Pumpkin',
  Potato = 'Potato',
}