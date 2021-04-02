import React from "react";

const card = (props) => {
  return (
    <div className="card" onClick={() => props.onClickCB(props.data.cardIdx)}>
      <div className="name">이름 : {props.data.name}</div>
      <div className="job">직업 : {props.data.job}</div>
    </div>
  );
};

export default card;
