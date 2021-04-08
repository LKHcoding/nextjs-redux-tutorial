import { combineReducers } from "redux";
import count from "./count";

// reducer 추가
const RootReducer = combineReducers({
  count,
});

export default RootReducer; //_app.js에서 reducer로 처리
