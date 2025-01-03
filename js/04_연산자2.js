/* 
  [템플릿 문자열]
  - `(백틱)을 이용하여 문자열 + 변수/값 혼합 작성물

  - 문자열 전체를 ``(백틱)으로 감싸고
    변수/값이 들어가야되는 부분에서 ${변수명/값} 형태로 작성
  
  ex)
  const num = 10;

  console.log(`num에 저장된 값은 ${num} 입니다`);

  //출력 : num에 저장된 값은 10 입니다.

*/




/** 비교 연산자 확인 */ 
function check1(){
  const num1 = 100;
  const num2 = 100;
  const num3 = 999;
  const str1 = '100';
  const str2 = '100';
  const str3 = '999';
  console.log("동등, 동일 비교 확인");
  console.log("1. 동등 비교(==, !=)");

  console.log("num1 == num2 : ",num1==num2);
  console.log("num1 == num3 : ",num1==num3);
  console.log("num1 == num3 : ",num1!=num3);

  console.log("num1 == str1 : ", num1 == str1);

  // string 끼리 비교
  console.log("str1 == str2 : ", str1==str2)
  console.log("str1 == str3 : ", str1==str3)


  // --------------------------------------------------

  console.log("2. 동일 비교(===, !==)");

  console.log("num1 === str1 : ", num1 === str1);
  //자료형이 다르기에 false

  
}

// 배수 판별기
function multipleCheck(){
  // 배수 판별기에 사용되는 요소를 모두 얻어와 변수에 저장
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const result2 = document.getElementById("result2");

  // 입력 받은 값을 number 타입으로 변환
  const v1 = Number(input2.value);
  const v2 = Number(input3.value);

  result2.innerText = v1 % v2 ===0
}

function compoundCheck(){
  let num = 100;
  console.log(`num 초기값 : ${num}`);

  num += 20;
  console.log(`num += 20 : ${num}`);

  num -= 60;
  console.log(`num -= 60 : ${num}`);

  num *= 3;
  console.log(`num *= 3 : ${num}`);

  num /= 10;
  console.log(`num /= 10 : ${num}`);

  num %= 5;
  console.log(`num %= 5 : ${num}`);
}

function orCheck(){

  const bool1 = (4 > 10) || (4 % 2===0)
  
  console.log(`4는 10을 초과하거나 짝수인가? ${bool1}`)
  const age = 20;
  const name = "홍길동"
  const bool2 = (age<18) || (name === "홍길동")
  console.log(`나이가 18세 미만 이거나, 이름이 "홍길동" 인가? ${bool2}`)

  const kor = 50;
  const eng = 75;
  const bool3 = ((kor<40) || (eng < 40)) || ((kor+eng)/2<60)

  console.log(`국어 또는 영어 점수가 40점 미만이거나 평균이 60점 미만인가? ${bool3}`)
}