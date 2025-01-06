




function check1(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);

  console.log("---------------------");

  // for문 버전
  for(let num = 1; num <= 5;num++){
    //초기식 -> let num = 1;
    //  -> 1이 저장된 변수 num을 선언

    // [조건식] num <= 5
    //  -> num 변수에 저장된 값이 5 이하면 true
    //    -> 반복 0 == for문 {} 내부 코드를 수행해라
    //  -> num 변수에 저장된 값이 5 이하가 아니면 false
    //    -> 반복 X == for문 {} 내부 코드를 수행하지 말아라

    //[증감식] num++
    //  -> num 변수에 저장된 반복 때 마다 값을 1 증가
    console.log(num);

  }
}

function check2(){
  for(let num = 1; num<=10; num++){
    console.log(num);
  }
}
function check3(){
  for(let num = 5; num<=13; num++){
    console.log(num);
  }
}

function check4(){

  let result = "";
  for(let num=1; num<8; num++){
    result+=num;
  }
  console.log(result);
}
function check5(){

  let result = "";
  for(let num=4; num<12; num++){
    result+=num;
  }
  console.log(result);
}

function check6(){
  let result = 0;
  for(let num=1; num<11; num++){
    result+=num;
  }
  console.log(result);
}

function check7(){
  const a = Number(document.getElementById("input7a").value);
  const b = Number(document.getElementById("input7b").value);
  let sum = 0;
  for(let num=a; num<=b; num++){
    sum+=num;
  }
  alert(`${a}부터 ${b} 사이 정수 합 : ${sum}`);
}

function check8(){
  let sum =0;
  for(let num=1; num<11; num+=2){
    console.log(num);
    sum+=num;
  }
  console.log(sum);
}

function check9(){
  let result ="";
  for(let num=3; num<31; num+=3){
    result += num + " ";
  }
  console.log(result);
  console.log("---------------------");
  result = "";
  for(let num=1; num<31; num++){
    if (num%3===0){
      result += num + " ";
    }
  }
  console.log(result);
}

function check10(){
  const start = Number(document.getElementById("start10").value);
  const end = Number(document.getElementById("end10").value);
  const multiple = Number(document.getElementById("multiple10").value);

  let result='';
  let sum=0;
  for(let num=start; num<=end; num++){
    if (num % multiple === 0){
      result+=num + " ";
      sum+=num;
    }
  }
  console.log(result);
  console.log("합계 ", sum);
}

function check11(){
  for(let num1=1; num1<10; num1++){
    console.log(`2 x ${num1} = ${num1*2}`)
  }
}

function check12(){
  const input11 = Number(document.getElementById("input11").value);
  if (input11 === 0){
    alert("단을 입력해주세요.");
    return;
  }
  if (input11<2 || input11>9 ) {
    alert("2~9단 사이만 입력 해주세요.")
    return;
  }
  for(let num=1; num<10; num++){
    console.log(`${input11} x ${num} = ${num*input11}`)
  }
}
function check13(){
  let result=''
  for(let num=10; num>0; num--){
    result+=num+' ';
  }
  console.log(result);
}
function check14(){
  let result=''
  for(let num=20; num>2; num-=3){
    result+=num+' ';
  }
  console.log(result);
}
function check15(){
  for(let num=9; num>0; num--){
    console.log(`3*${num}=${num*3}`);
  }
}

function check16(){
  let result = '';
  for(let num=1;num<31;num++){
    if (num%5===0){
      result += '@ '
    }else{
      result+=num + ' ';
    }
    if (num%10===0){
      result += '<br>';
    }
  }
  document.getElementById("result16").innerHTML = result;
}
function check16_continueTest(){
  let result = '';
  for(let num=1;num<31;num++){
    if (num%10===0){
      result+= '@ <br>';
      continue;
    }
    if (num%5===0){
      result += '@ '
      continue;
    }
    result+=num + ' ';
  }
  document.getElementById("result16").innerHTML = result;
}





function ch3(){
  for(let num1=2; num1<10; num1++){
    for(let num2=1;num2<10; num2++){
      console.log(`${num1} x ${num2} = ${num1*num2}`);
    }
  }
}
