import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { eventListReducer } from "./reducers/eventReducers";
import { userLoginReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  eventList: eventListReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
