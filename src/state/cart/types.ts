export interface Cart {
  products: { [key: string]: ProductCount };
}

type ProductCount = number;