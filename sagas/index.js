import { all, call } from "redux-saga/effects";
import saga from "./saga";
/**
 * 제너레이터 문법은 리턴을 순차적으로 시켜주는 것처럼 사용 할 수 있다.(yield)
 *
 */
export default function* rootSaga() {
  yield all([call(saga)]);
}

/**
 * react관련 어떤것들을 더 공부할 수 있느냐
 * context api, mobx,
 * immer.js(불변성 관리), typescript,
 * graphql
 */
