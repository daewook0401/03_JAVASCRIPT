/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달 받은 값이 양수/음수/0인지 판별해서 출력 
 *  @param num : 전달 받은 숫자
 * 
*/
function testFn1(num){
  let str = "";
  if(num === 0){
    str = "0";
  }else if(num < 0){
    str = "음수";
  }else{
    str = "양수";
  }
  alert(`${num}은/는 ${str}입니다.`);
}

// #btn1이 클릭 되었을 때

btn1.addEventListener("click", function(){
  //#input1인 요소에 작성된 값을 얻어와 number 타입으로 변화
  const value = Number(input1.value);
  testFn1(value);
});

/**
 *  전달 받은 배열 내 요소의 합 출력하기
 * @param arr : number만 저장된 1차원 배열
 */
function sumArr(arr){
  let sum = 0;
  for(let num of arr){
    sum += num;
  }
  alert(`합계 : ${sum}`);
}

// 합계 구하기
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(){
  const inputs = document.querySelectorAll("[name=input2]");

  //input에 작성된 값을 얻어와 배열 하나 생성
  const arr = [];
  for(let input of inputs){
    arr.push(Number(input.value));
  }
  sumArr(arr);
});

function multipleFn(a, b){
  let str = "";
  if(a % b === 0){
    str = "맞습니다.";
  } else {
    str = "아닙니다.";
  }
  alert(`${a}는 ${b}의 배수가 ${str}`);
}
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(){
  const inputs = document.querySelectorAll("[name=input3]");
  multipleFn(Number(inputs[0].value), Number(inputs[1].value));
});

function pow(num, x){
  let result =1;
  for(let i = 0; i < x; i++){
    result *= num;
  }
  return result;
}

function createStr(num, x, result){
  return `${num}의 ${x}승은 ${result}입니다.`;
}

// Closure(클로저)
// 함수 내부에서 함수를 정의하고 반환하는 것
//특징 1 : 데이터 은닉
// 외북에서 직접 접근할 수 없는 상태의 변수를 만들 수 있음
// 자바로 따지면 private

/* 매개 변수/Return으로 익명 함수 전달 하기 */
const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function(){
  
  const resultFn = testFn7( function(a,b){ return a+b; });
  console.log("resultFn(3) : ", resultFn(3));

});
function testFn7(otherFn){
  return function(num){
    return otherFn(10,20) * num;
  };
}

const arrows = document.querySelectorAll(".arrow");

arrows[0].addEventListener("click", () => {
  const sumFn = (a,b,c) => {
    return a+b+c;
  }
  console.log(sumFn(1,2,3));
});

arrows[1].addEventListener("click", () => {
  const square = num => {
    return num * num;
  }
  alert(square(999));
});

arrows[2].addEventListener("click", () => {

  const print = (str) => console.log(str);

  print("Hello, World!");

  const doubleFn = (num) => {return num * 2;};

  print(doubleFn(3));
});

arrows[3].addEventListener("click", () => {
  const fn1 = () => [1,2,3];

  // * {k:v, k:v} === JS 객체

  // 객체 반환( return, {} 생략 시 구문 오류 발생) 
  const fn2 = () => { return {name:"홍길동", age:20}; }
  console.log(fn2());
});

//7C09 7F6F 7DBE D672

document.querySelector("#btn8").addEventListener("click", function(){
  console.log(this); // 이벤트가 발생한 요소
});

document.querySelector("#btn9").addEventListener("click", () => {
  console.log(this); // === window 객체
  /* 
    window 객체란?
    -창(브라우저) 자체를 나타내는 객체

    -창(브라우저) 관련 기능을 제공
    (alert, prompt, setTimeout, setInterval 등 ...)
  */
});

/* 즉시 실행 함수 확인 */
const str = "A";
console.log(str);

(function(){
  const str = "B";
  console.log(str);
})();