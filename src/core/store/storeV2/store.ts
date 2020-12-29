import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import cardsReducer from "./cardsSlice";
// import rootReducer from "./reducers";
import layoutReducer from "../reducers/layoutReducer";
import todos from "../reducers/todos";


export default configureStore({
  reducer: {
    cards: cardsReducer,
    layoutReducer: layoutReducer
  },
});