import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CLEAR_CART,
  LOGIN_CART_LOAD,
} from "../constants/cartConstants";
import { getCartItemsFromStorage } from "../utils/cartUtil";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.event === item.event);
      if (existItem) {
        item.qty = existItem.qty + item.qty;
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.event === existItem.event ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.event !== action.payload),
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CLEAR_CART:
      return {
        cartItems: [],
        paymentMethod: "",
      };
    case LOGIN_CART_LOAD:
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, ...getCartItemsFromStorage(action.payload)]
      // };
      const cartItemsFromStorage = getCartItemsFromStorage(action.payload)
      let currCart;
      for(let item_index in cartItemsFromStorage){
        const item = cartItemsFromStorage[item_index]
        const existItem = state.cartItems.find(x => x.event === item.event)
        if(existItem){
          item.qty = existItem.qty + item.qty
          currCart = state.cartItems.map(x => x.event === existItem.event ? item : x)
        }
        else{
          currCart = [...state.cartItems, item]
        }
      }
      return{
        ...state,
        cartItems: currCart
      }
    default:
      return state;
  }
};
