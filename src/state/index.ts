import {combineReducers} from "redux";
import {Cart} from "./cart/types";
import cartReducer from "./cart/cartReducer";

export const rootReducer = combineReducers<AppState>({
  cart: cartReducer,
})

export interface AppState {
  cart: Cart;
}
