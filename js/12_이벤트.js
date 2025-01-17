// 인라인 이벤트 모델 확인 + this 확인

// 전달 인가(Argument) : 함수 호출 시 () 안에 작성하는 값
//                       함수 매개 변수로 전달됨

// 매개 변수(Parameter) : 함수 정의 시 () 안에 작성하는 변수
//                        호출 시 전달된 값을 저장
function check1(div){
  // 매개 변수 div : 클릭된 div 요소
  // console.log(div);

  // 클릭이 되면 클릭된 숫자를 버튼(div)에 출력

  // 1) 버튼에 작성된 내용 얻어오기
  let num = div.innerText;

  // 2) 얻어온 내용이 숫자가 아닌 경우
  // isNaN(값) : 값이 NaN인 경우 True, 숫자면 false.

  if(isNaN(num)){
    // 숫자가 아닌 경우
    div.innerText = 1;
    return;
  }
  // 3) 얻어온 내용이 숫자인 경우 : 숫자를 1 증가
  div.innerText = ++num;

}

// 고전 이벤트 모델 확인

// id가 "testA"인 요소를 얻어와 변수에 저장
// const testA = document.getElementById("testA");
const testA = document.querySelector("#testA");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스너 = 이벤트 핸들러

testA.onclick = function(){
  // testA 요소가 가지고 있는
  // onclick 변수에 --> (이벤트 리스너)
  // function(){} 을 대입 --> (이벤트 핸들러)

  // 고전 이벤트 모델에서 this === 이벤트가 발생한 요소
  console.log(this);
  alert("고전 이벤트 모델 확인됨");
}


// 고전 이벤트 모델 제거
// #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거
const testB = document.querySelector("#testB");

testB.onclick = function(){

  testA.onclick = null;
  // testA가 클릭 되었을 때의 동작(핸들러)을 null로 덮어씌움
  // -> 이벤트 핸들러가 사라짐(제거)

  alert("확인 버튼 클릭 이벤트 핸들러 제거");

}

// 고전 이벤트 모델 단점 확인

const testC = document.querySelector("#testC");
// onclick 이벤트 리스너에 이벤트 핸들러 대입
testC.onclick = function(){
  testC.style.backgroundColor = "pink";
}
// onclick 이벤트 리스너에 이벤트 핸들러 덮어쓰기
testC.onclick = function(){
  testC.style.fontSize = "40px";
}


// 표준 이벤트 모델

// 클릭할수록 투명 + 클릭 횟수 증가

const test1 = document.querySelector("#test1");

// 클릭할수록 투명
test1.addEventListener("click", function(){
  // click -> 감지할 이벤트 종류
  // function(){} -> 이벤트가 감지 되었을 때 수행할 이벤트 핸들러

  // opacity : 불투명 정도를 설정하는 속성
  // 0 : 투명
  // 1 : 불투명(선명하게 보임)
  let current = test1.style.opacity;

  
  // 처음엔 "" (빈칸)

  if (current === "" || current <= 0){
    current = 1; // 불투명
  }

  //투명도를 0.05 감소
  test1.style.opacity = current - 0.05;
  console.log("현재 투명도 : ", current);

});


// 클릭 시 숫자 1씩 증가
test1.addEventListener("click", function(){
  // #test1에 작성된 내용 얻어와 숫자로 변경
  let num = Number(test1.innerText);

  // #test1에 num을 1 증가 시킨 값을 대입
  test1.innerText = ++num;
});

const btnContainer = document.querySelectorAll(".btn-container > button");
const result2 = document.querySelector("#result2");
for(let i = 0; i <btnContainer.length; i++){
  btnContainer[i].style.backgroundColor = btnContainer[i].value;
  btnContainer[i].addEventListener("click", function(){
    result2.style.backgroundColor = this.value;
  });
}


// 실습 문제
// 변경하기 버튼 클릭시 input 요소에 작성된 색상 값을 읽어 얻어와 바로 위 .display 요소의 배경색으로 변경하기

const boxs = document.querySelectorAll(".box");
document.querySelector("#changeBtn").addEventListener("click", function(){
  for(let i = 0; i < boxs.length; i++){
    boxs[i].querySelector(".display").style.backgroundColor = boxs[i].querySelector(".inputColor").value;
    /* 
    rgb() 값으로 받기
    boxs[i].querySelector(".display").style.backgroundColor = `rgb(${boxs[i].querySelector(".inputColor").value})`;
    */
   }
});

/* 
const changeBtn = document.querySelector("#changeBtn");
const inputColors = document.querySelectorAll(".inputColor");
const displays = document.querySelectorAll(".display");  
changeBtn.addEventListener("click", function(){
  for(let i = 0; i < inputColors.length; i++){
    displays[i].style.backgroundColor = inputColors[i].value;
  }
});
 */