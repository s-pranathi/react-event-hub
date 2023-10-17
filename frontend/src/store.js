import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  eventDetailsReducer,
  eventListReducer,
} from "./reducers/eventReducers";i
import { userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'
  import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./reducers/orderReducers";

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderPay: orderPayReducer,
  orderDetails: orderDetailsReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

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
