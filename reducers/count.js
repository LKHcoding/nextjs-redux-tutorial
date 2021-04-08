export const initialState = 0; // state값은 객체, 배열 구조 가능 (useReducer 구조 참조)

// Action 타입 설정
export const COUNT_PLUS = "COUNT_PLUS";
export const COUNT_MINUS = "COUNT_MINUS";

// Action 생성 함수
export const countPlusAction = () => ({
  type: COUNT_PLUS,
});

export const countMinusAction = () => ({
  type: COUNT_MINUS,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PLUS:
      return state + 1;
    case COUNT_MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
