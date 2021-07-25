import {ADD_PRODUCT, AddProduct, CLEAR_CART, ClearCart, REMOVE_PRODUCT, RemoveProduct} from "./actions";
import {Cart} from "./types";

export default function cartReducer(state: Cart = initCart(), action: AddProduct | RemoveProduct | ClearCart): Cart {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          // чтобы получить название ключа из выражения, оно должно быть обернуто в квадратные скобки
          [action.product]: state.products[action.product] ? state.products[action.product] + 1 : 1
        }
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [action.product]: state.products[action.product] ? state.products[action.product] - 1 : 0
        }
      }
    case CLEAR_CART:
      return {
        ...state,
        products: {}
      }
    default:
      return state
  }
}

function initCart(): Cart {
  return {
    products: {}
  }
}