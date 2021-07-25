import {combineReducers} from "redux";
import {Cart} from "./cart/types";
import cartReducer from "./cart";

export const rootReducer = combineReducers<AppState>({
  cart: cartReducer,
})

export interface AppState {
  cart: Cart;
}

export enum ProductType {
  Cucumber = 'Cucumber',
  Pumpkin = 'Pumpkin',
  Potato = 'Potato',
}
