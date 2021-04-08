import React from "react";

const card = (props) => {
  return (
    <div className="card" onClick={() => props.onClickCB(props.data.id)}>
      <div className="item">
        <label>Name</label>
        <div>{props.data.username}</div>
      </div>
      <div className="item">
        <label>Email</label>
        <div>{props.data.email}</div>
      </div>
      <div className="item">
        <label>Website</label>
        <div>{props.data.website}</div>
      </div>
    </div>
  );
};

// React.memo와 useMemo의 차이점
// 참고 - https://sustainable-dev.tistory.com/137

// React.memo, useMemo, useCallback 세가지 비교 - https://velog.io/@yu_yu/useMemo-useCallback-React.memo-gu4rsta9
export default React.memo(card);
