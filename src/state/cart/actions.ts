import {ProductType} from "./types";

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


export function deleteProduct(product: ProductType) {
  return {
    type: DELETE_PRODUCT,
    product
  } as const;
}

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export type DeleteProduct = ReturnType<typeof deleteProduct>;


export function clearCart() {
  return {
    type: CLEAR_CART
  } as const;
}

export const CLEAR_CART = 'CLEAR_CART';
export type ClearCart = ReturnType<typeof clearCart>;