import {ProductType} from "../index";

export function addProduct(product: ProductType) {
  return {
    type: ADD_PRODUCT,
    product
  } as const;
}

export const ADD_PRODUCT = 'ADD_PRODUCT';
export type AddProduct = ReturnType<typeof addProduct>;


export function removeProduct(product: ProductType) {
  return {
    type: REMOVE_PRODUCT,
    product
  } as const;
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export type RemoveProduct = ReturnType<typeof removeProduct>;


export function clearCart() {
  return {
    type: CLEAR_CART
  } as const;
}

export const CLEAR_CART = 'CLEAR_CART';
export type ClearCart = ReturnType<typeof clearCart>;