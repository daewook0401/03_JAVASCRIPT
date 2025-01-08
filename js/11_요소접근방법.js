/* 
  JS를 이용해서 CSS 변경하는 방법

  * 요소.style.css속성 = 값

  -> inline 스타일로 CSS가 추가됨
    (시작태그에 Style 속성이 들어감)
*/
function classTest(){
  /* 
    유사 배열이란?
    배열 처럼 index, length를 제공하지만
    배열 전용 함수(메서드)를 제공하지 않음
  */
  const divs = document.getElementsByClassName('cls-test');
  console.log(divs);

  // divs에 저장된 요소를 하나씩 순차 접근
  for(let i=0; i<divs.length; i++){
    
    // 각 요소에 작성된 내용 얻어와 콘솔에 출력
    console.log(divs[i].innerText);

    // 각 요소에 배경색을 작성된 내용으로 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}
function classInit(){
  const divs = document.getElementsByClassName('cls-test');
  for(let i=0; i<divs.length; i++){
    divs[i].style.backgroundColor = '';
  }
}

function classTest2(){
  const inputs = document.getElementsByClassName('cls-input');
  let sum = 0;
  for(let i=0; i<inputs.length; i++){
    sum += Number(inputs[i].value);
  }
  document.getElementById('sumResult').innerText = sum;
}

function tagNameTest(){

  const lists = document.getElementsByTagName('li');

  for(let i=0; i<lists.length; i++){
    //각 요소에 저장된 값을 어덩와 rgb 변경에 이용
    const num = Number(lists[i].innerText);
    lists[i].style.backgroundColor = `rgb(0, 240, ${num*25})`;
  }
}

function nameTest(){
  const hobbyList = document.getElementsByName('hobby');
  let content = '';
  let count = 0;
  for(let i=0; i<hobbyList.length; i++){
    if(hobbyList[i].checked){
      count++;
      content+= hobbyList[i].value + ' ';
    }
  }
  content += `<br><br>선택된 취미 개수 : ${count}`;
  document.getElementsByClassName('name-result')[0].innerHTML = content;
}