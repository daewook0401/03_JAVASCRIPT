
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

function cssTest(){
  
  const container = document.querySelector('[target-div= css-div]');

  console.log(container);

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";

  // document.querySelector("css선택자")
  // -> 여러 요소가 선택된 경우 "첫번째" 요소만 얻어옴

  const first = document.querySelector("[target-div= css-div] > div");

  console.log(first);
  first.style.color = "red";
  first.style.fontSize = "30px";

  // document.querySelectorAll("css선택자")
  // -> 모든 요소를 선택해서 (유사)배열 형태로 반환

  const divs = document.querySelectorAll("[target-div= css-div] >div");
  console.log(divs);

  const colors = ['yellow', 'pink'];
  for (let i=0; i<divs.length; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center"; //중심축 방향 가운데
    divs[i].style.alignItems = "center"; // 교차축 방향 가운데
    divs[i].style.backgroundColor = colors[i];
  }
}

function readValue(){
  //채팅이 출력되는 화면(배경) 요소 선택
  const bg = document.querySelector("#chattingBg");

  
  //입력되는 채팅 내용 input 요소 선택
  const input = document.querySelector("#userInput");

  // 1) 입력된 값이 없을 경우
  //  - 아무 값도 입력을 안했을 때
  //  - 공백만 입력했을 때(띄어쓰기, 탭, 엔터)만 있을 경우
  
  //  * string.trim() : 문자열 좌우 공백을 제거
  if (input.value.trim().length === 0){
    alert('공백 제외 메시지를 입력하세요');
    input.value = '';
    input.focus();
    return;
  }

  /* 입력된 값을 읽어와 채팅 화면에 누적 */
  bg.innerHTML += `<p><span>${input.value}</span></p>`

  // 채팅화면 출력 후 입력 값 제거
  input.value ='';

  // 입력창에 포커스 이동
  input.focus();

  // 채팅 화면의 스크롤을 제일 아래로 이동

  // 요소.scrollHeight
  // -> 스크롤되어 가려진 부분까지 포함한 요소 전체 높이
  // 확인 : document.querySelector("#chattingBg").scrollHeight

  // 요소.scrollTop
  // -> 스크롤 제일 위에서 부터 현재 위치

  // 요소.scrollTop = 값;
  // -> 스크롤을 위에서 지정된 값 만큼 떨어진 위치로 이동

  bg.scrollTop = bg.scrollHeight;
}

// #userInput 요소에 "Enter" 키가 입력 된 경우 채팅 추가
document.querySelector("#userInput")
  .addEventListener('keydown', function(event){
  if (event.key === 'Enter') {
    // 엔터키를 눌렀을 때 수행할 동작
    readValue();
  }
});