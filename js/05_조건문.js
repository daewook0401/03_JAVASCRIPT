/** if 예제 - 양수인지 검사 */
function check1(){

  // id가 "input1"인 요소를 얻어와 in1 상수에 저장

  const in1 = document.getElementById("input1");

  //id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여
  // val 변수에 저장
  const val = Number(in1.value);

  //양수가 맞는지 검사
  if(val>0)
  {
    //조건식이 true인 경우 수행할 코드;
    alert(`${val}은 양수 입니다.`); //브라우저 알림이 뜸
  }
  if(val<=0){
    alert(`${val}은 양수가 아닙니다.`);
  }
}

function check2(){
  //난수 발생 : Math.random() 0<= 랜덤 <1;
  //Math.floow는 내림처리 
  const randomNumber = Math.floor(Math.random()*100+1)
  if (randomNumber % 2 === 0)
  {
    alert(`${randomNumber} 짝수`)
  }
  else
  {
    alert(`${randomNumber} 홀수`)
  }
}

function check3(){
  const input3 = document.getElementById("input3");
  const val3 = Number(input3.value);

  let result; //undefined
  
  if (val3>0){
    result = "양수";
  }
  else if (val3<0){
    result = "음수";
  }
  else {
    result = "0";
  }

  alert(`${val3}은/는 ${result} 입니다`)
}

function ageCheck(){
  const inputAge = document.getElementById("inputAge");
  const Age = Number(inputAge.value);

  let result;
  if (Age<0 || Age>120){
    result = '범위를 초과합니다. 0이상 120이하의 나이를 입력하십시오'
  }
  else if (Age>=0 && Age <14){
    result = '어린이입니다.'
  }
  else if (Age>=14 && Age <20){
    result = '청소년입니다.'
  }
  else if (Age>=20 && Age <121){
    result = '성인입니다.'
  }

  alert(`${Age}은/는 ${result}`)
}

//한줄 코드 (조건문) ? (true 값) : (false 값)
//백준 풀때 진짜 많이 나오는 형식
function ageChectTest() {
  const age = Number(document.getElementById("inputAge").value);
  return alert(`${age < 0 && age > 120 ? "잘못 입력함" : age > 19 ? "성인" : age > 13 ? "청소년" : "어린이"}`);
}

function ageCheck2(){
  const inputAge = document.getElementById("inputAge");
  const Age = Number(inputAge.value);
  let result;
  if (Age<0 || Age>120){
    result = "잘못입력";
  } else if (Age > 19){
    result = "성인"
  } else if (Age > 13){
    result = "청소년"
  } else {
    result = "어린이"
  }
  alert(`${Age}은/는 ${result}`)
}

/** 두 수 A, B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4(){

  // id가 inputA, inputB인 요소를 얻어와 변수에 저장
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  
  if(inputA.value.length === 0 || inputB.value.length === 0){
    alert("입력되지 않은 값이 존재합니다.");
    return; //함수를 즉시 종료하고 호출한 곳으로 돌아감
            // -> 함수를 수행할 수 없는 상태여서 미리 종료
  }
  
  // 위 if문을 건너 뜀 == 둘다 입력된 상태

  const v1 = Number(inputA.value);
  const v2 = Number(inputB.value);

  if (v1<v2){
    alert("A가 B보다 작습니다.")
    return;
  }

  if(v1 % v2 === 0){ //A가 B의 배수가 맞을 경우
    alert(`${v1}은 ${v2}의 배수가 맞습니다.`);
    return;
  }
  alert(`${v1}은 ${v2}의 배수가 아닙니다.`);
}

function check5(){
  const input5 = document.getElementById("input5");

  if(input5.value.length === 0){
    alert("숫자를 입력해주세요");
    return;
  }
  let result;
  switch( Number(input5.value)){
    case 3 : result = "3이 입력 되었습니다."; break;
    case 4 : result = "입력된 숫자는 4 입니다."; break;
    case 5 : result = "5를 입력하셨습니다"; break;
    default : result = "3,4,5가 아닌 다른 숫자가 입력 되었습니다.";
  }
  alert(result);
  
  /* switch문 -> if else문으로 변경 */

  let result2;
  if (Number(input5.value)===3){
    result2 = "3이 입력 되었습니다.";
  }else if(Number(input5.value)===4){
    result2 = "입력된 숫자는 4 입니다.";
  }else if(Number(input5.value)===5){
    result2 = "5를 입력하셨습니다.";
  }else{
    result2 = "3,4,5가 아닌 다른 숫자가 입력 되었습니다."
  }
  alert(result2);
}

function calc(Op){
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");
  if (number1.value.length === 0 || number2.value.length === 0){
    alert("숫자를 입력해주세요.");
    return;
  }
  const n1 = Number(number1.value);
  const n2 = Number(number2.value);
  let result;
  switch (Op) {
    case '+' : result = n1 + n2; break;
    case '-' : result = n1 - n2; break;
    case '*' : result = n1 * n2; break;
    case '/' : result = n1 / n2; break;
    case '%' : result = n1 % n2; break;
    default : result = "잘못된 연산자";
  }
  document.getElementById("calcResult").innerText = result;
}

function check6(){
  const input6 = document.getElementById("input6");

  if (input6.value.length === 0){
    alert("월(달)을 입력해 주세요.")
    return;
  }

  // break(멈추다) : 현재 case 까지만 해석하고 switch문을 멈춤

  // -> break 미작성 시
  // 현재 case 수행 후 멈추지 않고
  // 다음 case를 연달아서 수행
  let result;
  switch(Number(input6.value)){
    case 3 : case 4 : case 5 : result = "봄"; break;
    case 6 : case 7 : case 8 : result = "여름"; break;
    case 9 : case 10 :  case 11 : result = "가을"; break;
    case 12 : case 1 : case 2 : result = "겨울"; break;
    default : result = "잘못 입력";
  }

  alert(result);
}

/* 14 / 3 = 4
   9 / 3 = 3
   6 / 3 = 2
  3 / 3 = 1

*/