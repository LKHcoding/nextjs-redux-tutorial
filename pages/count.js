import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { countMinusAction, countPlusAction } from "../reducers/count";

const count = () => {
  const dispatch = useDispatch(); // dispatch를 사용하는 hook
  const count = useSelector((state) => state.count); // store의 state 호출(reducers/index 참고)

  const handleClickPlus = useCallback(() => {
    dispatch(countPlusAction());
  }, []);

  const handleClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);

  return (
    <div>
      카운트 : {count}
      <button onClick={handleClickPlus}> + </button>
      <button onClick={handleClickMinus}> - </button>
    </div>
  );
};

export default count;
