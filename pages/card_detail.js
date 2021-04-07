import React, { useEffect, useState } from "react";
import axios from "axios";

const card_detail = ({ query }) => {
  const [cardData, setCardData] = useState(query.data);

  // const getPostDataByJson = () => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/users/${query.idx}`)
  //     .then((res) => setCardData(res.data))
  //     .catch((err) => console.log(err));
  // };
  // //페이지 첫 랜더링 후 1번만 실행되는곳
  useEffect(() => {
    // getPostDataByJson();
    console.log(query);
    // setCardData(data);
  }, []);

  return (
    <div>
      card_detail
      {cardData && (
        <div>
          <p>{cardData.username}</p>
          <p>{cardData.email}</p>
          <p>{cardData.website}</p>
        </div>
      )}
    </div>
  );
};

card_detail.getInitialProps = async (context) => {
  const { query } = context;
  return { query };
};

export default card_detail;
