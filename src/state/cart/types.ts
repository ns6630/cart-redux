export interface Cart {
  products: { [key: string]: ProductCount };
}

export type ProductCount = number;