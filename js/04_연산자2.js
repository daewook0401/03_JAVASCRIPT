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