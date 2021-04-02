import React, { useEffect, useState } from "react";
import Card from "../components/card";

const cardList = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const [inputVal, setInputVal] = useState({
    name: "",
    job: "",
  });
  const [cardList, setCardList] = useState([
    {
      cardIdx: 1,
      name: "홍길동",
      job: "의적",
    },
    {
      cardIdx: 2,
      name: "김철수",
      job: "선생님",
    },
    {
      cardIdx: 3,
      name: "박영희",
      job: "선생님",
    },
    {
      cardIdx: 4,
      name: "배트맨",
      job: "의적",
    },
  ]);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleClickCard = (idx) => {
    setSelectedCard(idx);
  };

  const handleUpdateCard = () => {
    if (selectedCard === undefined || selectedCard === "") {
      return alert("선택된 카드가 없습니다.");
    }
    if (inputVal === "") {
      return alert("값을 입력해주세요");
    }
    setCardList(
      cardList.map((item) => {
        return item.cardIdx === selectedCard
          ? {
              ...item,
              job: inputVal.job,
              name: inputVal.name,
            }
          : item;
      })
    );
  };

  const handleAddCard = () => {
    let newObj = {
      cardIdx: cardList.length + 1,
      name: inputVal.name,
      job: inputVal.job,
    };

    setCardList(cardList.concat(newObj));
  };

  const handleDeleteCard = () => {
    if (selectedCard === undefined || selectedCard === "") {
      return alert("선택된 카드가 없습니다.");
    }

    setCardList(cardList.filter((item) => item.cardIdx !== selectedCard));
  };

  useEffect(() => {}, [selectedCard]);

  return (
    <div>
      <section className="card-list-container">
        <div className="card-list-container wrapper">
          <div>
            <input
              className="search-input"
              type="text"
              name="name"
              value={inputVal.name}
              onChange={handleChangeInput}
              placeholder="이름"
            />
            <input
              className="search-input"
              type="text"
              name="job"
              value={inputVal.job}
              onChange={handleChangeInput}
              placeholder="직업"
            />
            <button className="btn-black" onClick={handleUpdateCard}>
              수정
            </button>
            <button className="btn-black" onClick={handleAddCard}>
              추가
            </button>
            <button className="btn-black" onClick={handleDeleteCard}>
              삭제
            </button>
          </div>
          <div className="card-list">
            {cardList
              // .filter((item) => item.name === inputVal)
              .map((item, index) => (
                <Card key={index} data={item} onClickCB={handleClickCard} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default cardList;
