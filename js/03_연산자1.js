/* HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열) */

/* 계산기 동작 코드 */



// 전역 변수(global, 어디서든 사용 가능한 변수) 선언

// document : HTML 문서
// . (점 연산자) : 내부(하위) 접근 연산자, ~의
// get : 얻다
// Element : HTML 요소
// ById("input1") : id가 "input1"으로 일치하는 

// -> 문서 내에서 id가 일치하는 요소 얻어오기.
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const calcResult = document.getElementById('calcResult');

/* Number(input1.value)가 계속 반복되는데 전역변수로 선언하면 안될까? */

// const test1 = Number(input1.value);
// const test2 = Number(input2.value);

/* 전역 변수는 페이지 로딩 시점에 해석되서 값이 결정되기에 test1, test2는 0이 된다 */
/** 더하기 함수 (DOC 주석, 함수 설명 작성용 주석) */
function plusFn(){
  // input1.value : #input1 요소에 작성된 값 얻어오기

  // Number('숫자형태 문자열') : 숫자형태 문자열을 숫자로 변환
  // 
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log('계산된 값 :', value1+value2);

  calcResult.innerText = value1 + value2;
}

function minusFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  calcResult.innerText = value1 - value2;
}

function multiplyFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log('계산된 값 :', value1*value2);

  calcResult.innerText = value1 * value2;
}

function divideFn(){
  calcResult.innerText = Number(input1.value) / Number(input2.value);
}

function remainderFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log('계산된 값 :', value1%value2);

  calcResult.innerText = value1 % value2;
}


// -------------------------------------------
// 산술 연산자 응용

const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const calcResult2 = document.getElementById('calcResult2');

/** 첫 번째 값 X2 */
function doubleFn(){
  calcResult2.innerText = Number(input3.value) * 2;
}

/** 두 번째 값 제곱 */
function squareFn(){
  calcResult2.innerText = Number(input4.value) ** 2;
}

/* 모든 산술 연산 결과 일괄 출력 */
function allOperationFn(){
  const v1 = Number(input3.value);
  const v2 = Number(input4.value);

  //각각의 연산 결과를 별도의 변수에 따로 저장
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;

  // 요소.innerText = "문자열";
  // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // - HTML 코드 해석 X
  
  // 요소.innerHTML = "문자열";
  // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // - HTML 코드 해석 O

  calcResult2.innerHTML = 
   "<ul>" 
   + "<li> + 결과 : " + plus + "</li>"
   + "<li> - 결과 : " + minus + "</li>"
   + "<li> * 결과 : " + multi + "</li>"
   + "<li> / 결과 : " + div + "</li>"
   + "<li> % 결과 : " + mod + "</li>"
   + "</ul>"
  
}


// -------------------------------------------

const countResult = document.getElementById('countResult');
/* 증감 연산자를 이용해 1씩 증가하는 함수 */
function increase(){
  // 요소.innerText : 요소 내용(텍스트)을 가져오거나 설정
  // 요소.innerText; // 1) 요소 내용(텍스트) 얻어오기
  // 1) countResult에 작성된 내용(숫자) 얻어오기

  let count = Number(countResult.innerText);

  countResult.innerText = ++count;
}

/* 증감 연산자를 이용해 1씩 감소하는 함수 */
function dicrease(){
  let count = Number(countResult.innerText);

  countResult.innerText = --count;
}

/* 전위/후위 연산 확인하기 */
function checkFn(){
  let num = 100;
  // 전위 연산 : 다른 연산 보다도 최우선으로 실행
  console.log("++num : ", ++num);
  console.log("++num : ", ++num);
  console.log("++num : ", ++num);
  
  let a = 10;
  let b = 5;
  let c = ++a * b--;
  // a : 11
  // b : 4
  // c : 55

  console.log(a,b,c);
}