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