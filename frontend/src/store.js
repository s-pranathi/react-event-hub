import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  eventDetailsReducer,
  eventListReducer,
} from "./reducers/eventReducers";
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  ordersReducer,
} from "./reducers/orderReducers";
import { getCartItemsFromStorage } from "./utils/cartUtil";

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderPay: orderPayReducer,
  orderDetails: orderDetailsReducer,
  orders: ordersReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

let cartItemsFromStorage = getCartItemsFromStorage(userInfoFromStorage);

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
