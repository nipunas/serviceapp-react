import { combineReducers } from "redux";
import todos from './todos';
import layoutReducer from './layoutReducer';

export default combineReducers({ todos, layoutReducer });