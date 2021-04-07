import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../components/card";
import axios from "axios";
import Router from "next/router";

const cardList = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const [inputVal, setInputVal] = useState({
    name: "",
    job: "",
  });
  const [cardList, setCardList] = useState([]);

  const [imgFileUrl, setImgFileUrl] = useState("");
  const [imgFile, setImgFile] = useState();

  const imgPreviewReference = useRef();
  const fileInputReference = useRef();

  const handleChangeFile = (e) => {
    const { files } = e.target;
    setImgFile(files[0]);
  };

  const handleAddImg = () => {
    fileInputReference.current.click();
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleClickCard = useCallback(
    (idx) => {
      setSelectedCard(idx);
      Router.push(`/card_detail/${idx}`).then(() => window.scrollTo(0, 0));

      //router를 통해 다른페이지로 넘어가게되면
      //스크롤이 유지되는경우가있다. 그래서 필요에 따라 화면 상단으로 올려 줘야한다.
    },
    [selectedCard]
  );

  const handleUpdateCard = () => {
    if (selectedCard === undefined || selectedCard === "") {
      return alert("선택된 카드가 없습니다.");
    }
    if (inputVal === "") {
      return alert("값을 입력해주세요");
    }
    // setCardList(
    //   cardList.map((item) => {
    //     return item.cardIdx === selectedCard
    //       ? {
    //           ...item,
    //           job: inputVal.job,
    //           name: inputVal.name,
    //         }
    //       : item;
    //   })
    // );

    let updateObj = {
      name: inputVal.name,
      username: inputVal.name,
    };

    axios({
      url: `https://jsonplaceholder.typicode.com/users/${selectedCard}`,
      method: "put",
      data: updateObj,
    })
      .then((res) => {
        console.log(res.data);

        setCardList(
          cardList.map((item) => {
            return item.id === res.data.id
              ? {
                  ...item,
                  name: res.data.name,
                  username: res.data.username,
                }
              : item;
          })
        );

        // getPostDataByJson();
      })
      .catch((err) => console.log(err));
  };

  const handleAddCard = () => {
    // let newObj = {
    //   cardIdx: cardList.length + 1,
    //   name: inputVal.name,
    //   job: inputVal.job,
    // };
    // setCardList(cardList.concat(newObj));

    if (!inputVal.name) return alert("이름을 입력하세요");

    let newObj = {
      email: "example@example.com",
      name: inputVal.name,
      phone: "123123123-123123",
      username: inputVal.name,
      website: "example.org",
    };

    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "post",
      data: newObj,
    })
      .then((res) => {
        console.log(res.data);
        setCardList(cardList.concat(res.data));

        //getPostDataByJson();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = () => {
    if (selectedCard === undefined || selectedCard === "") {
      return alert("선택된 카드가 없습니다.");
    }
    // setCardList(cardList.filter((item) => item.cardIdx !== selectedCard));

    axios({
      url: `https://jsonplaceholder.typicode.com/users/${selectedCard}`,
      method: "delete",
    })
      .then((res) => {
        // console.log(res.data);
        setCardList(cardList.filter((item) => item.id !== selectedCard));
      })
      .catch((err) => console.log(err));
  };

  const getPostDataByJson = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setCardList(res.data))
      .catch((err) => console.log(err));
  };
  //페이지 첫 랜더링 후 1번만 실행되는곳
  useEffect(() => {
    getPostDataByJson();
  }, []);

  useEffect(() => {}, [selectedCard]);

  useEffect(() => {
    if (imgFile) {
      // FileReader를 사용해서 이미지 미리보기 기능 구현하기
      // const preview = imgPreviewReference.current;
      // let reader = new FileReader();
      // reader.onload = function (e) {
      //   preview.src = e.target.result;
      // };
      // reader.readAsDataURL(imgFile);

      //URL사용해서 미리보기 구현하기
      // *참고 - https://ichi.pro/ko/reactlo-eoblodeu-doen-imiji-milibogi-37160975550141
      const imageUrl = URL.createObjectURL(imgFile);
      setImgFileUrl(imageUrl);
    }
  }, [imgFile]);

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
            {/* <input
              className="search-input"
              type="text"
              name="job"
              value={inputVal.job}
              onChange={handleChangeInput}
              placeholder="직업"
            /> */}
            {/* <button className="btn-black" onClick={handleUpdateCard}>
              수정
            </button>
            <button className="btn-black" onClick={handleAddCard}>
              추가
            </button>
            <button className="btn-black" onClick={handleDeleteCard}>
              삭제
            </button> */}
            {/* 파일 업로드 할때 useRef사용하는 방식 */}
            <button className="btn-black" onClick={handleAddImg}>
              이미지추가
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputReference}
              onChange={handleChangeFile}
            />
            {imgFile && (
              <img
                ref={imgPreviewReference}
                style={{ width: "400px", height: "auto" }}
                src={imgFileUrl}
              />
            )}
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
