function createTable(){
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const startNum = Number(startInput.value);
  const endNum = Number(endInput.value);
  const thead = document.getElementById("thead");
  const tbody = document.getElementById("tbody");
  
  thead.innerHTML = "";
  tbody.innerHTML = "";

  if (startInput.value.length === 0 || endInput.value.length === 0){
    alert("시작/종료 단을 입력 해주세요");
    return;
  }

  if (startNum <0 || endNum <0){
    alert("1 이상의 수만만 입력 해주세요");
    return;
  }
    thead.innerHTML = createThead(startNum,endNum);
    tbody.innerHTML = createTbody(startNum,endNum);
}

function createThead(startNum, endNum){
  
  let theadResult = `<tr>`;
  if (startNum>endNum){
    for(let n=startNum;n>=endNum;n--){
    theadResult+=`<th>${n}단</th>`;
    } 
  }
  else{
    for(let n=startNum;n<=endNum;n++){
      theadResult+=`<th>${n}단</th>`;
    }
  }

  theadResult+=`</tr>`;
  return theadResult;
}

function createTbody(startNum, endNum){
  let tbodyResult = `<tr>`;
  if (startNum>endNum){
    for(let n2=1;n2<=9;n2++){
      for(let n1=startNum; n1>=endNum; n1--){
        tbodyResult+=`<td>${n1} x ${n2} = ${n1 * n2}</td>`;
      }
      tbodyResult+=`</tr>`
    }
  }
  else{
    for(let n2=1;n2<=9;n2++){
      for(let n1=startNum; n1<=endNum; n1++){
        tbodyResult+=`<td>${n1} x ${n2} = ${n1 * n2}</td>`;
      }
      tbodyResult+=`</tr>`
    }
  }
  return tbodyResult;
}
