import { all, call } from "redux-saga/effects";
import saga from "./saga";

export default function* rootSaga() {
  yield all([call(saga)]);
}
