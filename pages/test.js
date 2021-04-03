function solution(needs, r) {
  //필요한 부품 예시
  // 0 <-
  // 0,1 <-
  // 0,1 <-
  // 0,2
  // 0,1 <-
  // 1,2

  //r이 2일때 0,1 두개를 선택하면 정답 4개가 나와야한다.

  var answer = 0;
  let cntNeedObj = {};

  let needsChangedArr = [];
  for (let index = 0; index < needs.length; index++) {
    let tmpCnt = [];
    for (let index2 = 0; index2 < needs[index].length; index2++) {
      if (needs[index][index2] === 1) {
        tmpCnt.push(index2);
      }
    }
    needsChangedArr.push(tmpCnt);

    //가장 많이 필요한 부품 cnt 구하기
    tmpCnt.map((item) => {
      if (cntNeedObj[item]) {
        cntNeedObj[item] = cntNeedObj[item] + 1;
      } else {
        cntNeedObj[item] = 1;
      }
    });
  }
  // console.log(cntNeedObj);
  console.log(needsChangedArr);

  //제일 value큰 값 r번 구하기
  let MaxValIdxArr = [];
  for (let index1 = 0; index1 < r; index1++) {
    let tmpMaxVal = -1;
    let selectedKey = -1;
    for (let index = 0; index < Object.keys(cntNeedObj).length; index++) {
      if (cntNeedObj[index]) {
        if (tmpMaxVal < cntNeedObj[index]) {
          tmpMaxVal = cntNeedObj[index];
          selectedKey = index;
        }
      }
    }
    MaxValIdxArr.push(selectedKey);
    delete cntNeedObj[selectedKey];
  }
  console.log(MaxValIdxArr);

  //필요한 부품 예시
  // 0 <-
  // 0,1 <-
  // 0,1 <-
  // 0,2
  // 0,1 <-
  // 1,2

  return answer;
}
