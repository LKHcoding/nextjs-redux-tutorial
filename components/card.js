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

export default card;
