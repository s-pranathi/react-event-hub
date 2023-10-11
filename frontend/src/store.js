import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { eventListReducer } from "./reducers/eventReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";

const rootReducer = combineReducers({
  eventList: eventListReducer,
  userLogin: userLoginReducer,
  cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {cartItems: cartItemsFromStorage}

};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
