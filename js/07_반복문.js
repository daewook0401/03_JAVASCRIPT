




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

function check17(){
  
  for(let n1=1;n1<4;n1++){
    let result='';
    for(let n2=1;n2<5;n2++){
      result+=n2;
    }

    console.log(result);
    console.log("---");
  }
}
function check18(){
  
  for(let n1=0;n1<4;n1++){
    let result='';
    for(let n2=1;n2<6;n2++){
      result+=n2;
    }

    console.log(result);
    console.log("---");
  }
}
function check19(){
  
  for(let n1=0;n1<3;n1++){
    let result='';
    for(let n2=6;n2>0;n2--){
      result+=n2;
    }

    console.log(result);
  }
}

function check20(){
  for(let n1=1; n1<6;n1++){
    let result=''; 
    for(let n2=1;n2<n1+1;n2++){
      result+=n2;
    } 
    console.log(result);}
  
}
function check21(){
  for(let n1=1; n1<6;n1++){
    let result=''; 
    for(let n2=1;n2<n1+1;n2++){
      result+=n2+2;
    } 
    console.log(result);
  }
  //다른 방법
  for(let n1=3; n1<8;n1++){
    let result=''; 
    for(let n2=3;n2<n1+1;n2++){
      result+=n2;
    } 
    console.log(result);
  }
}

function check22(){
  for(let n1=1;n1<4;n1++){
    let result='';
    for(let n2=1;n2<n1+1;n2++){
      result+='*';
    }
    console.log(result);
  }
}

function check23(){
  const num = Number(document.getElementById("input23").value)
  if (num<=0 ){
    alert("숫자를 입력해주세요");
    return;
  }
  for(let n1=1;n1<=num;n1++){
    let result='';
    for(let n2=1;n2<=n1;n2++){
      result+='*';
    }
    console.log(result);
  }
}

function check24(){
  for(let n1=4;n1>=1;n1--){
    let result='';
    for(let n2=n1;n2>=1;n2--){
      result+='*';
    }
    console.log(result);
  }
  for(let n1=1;n1<=4;n1++){
    let result='';
    for(let n2=1;n2<=5-n1;n2++){
      result+='*';
    }
    console.log(result);
  }
}

function check25(){
  let cout = 0;
  for(let num=1;num<=30;num++){
    if (num%4===0){
      cout++;
    }
  }
  console.log("개수 : ", cout);
}

function check26(){
  const inputNumber = Number(document.getElementById("input26").value)
  let cout = 0;
  for(let num=1;num<=100;num++){
    if (num%inputNumber===0){
      cout++;
    }
  }
  console.log(`1~100 사이 ${inputNumber}의 배수는 ${cout}개`);

}

function check27(){
  let count=1;
  for(let n1=1;n1<=3;n1++){
    let result = ''
    for(let n2=1;n2<=4;n2++){
      result += `${count++} `;
    }
    console.log(result);
  }
}

function check28(){
  let sum=0;
  let num;
  while(num = prompt("값 입력")){
    sum+=Number(num);
  }
  alert(`총합계 ${sum}`);
}

function check29(){
  const gimbap = 4000;
  const ramen = 4500;
  const donkkasue = 9000;

  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  let input;

  while (input !== null){
    input = prompt("메뉴 번호 입력(1. 김밥 2. 라면 3. 돈가쓰")

    switch(input){
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default: alert("잘못 입력 하셨습니다.");
    }
  }

  let outputHtml = ''; //출력할 html 코드가 포함된 문자열 저장

  if(gCount>0){
    outputHtml += `<li>김밥(${gCount}개) : ${gCount*gimbap}</li>`;
  }
  if(rCount>0){
    outputHtml += `<li>라면(${rCount}개) : ${rCount*ramen}</li>`;
  }
  if(dCount>0){
    outputHtml += `<li>돈까스(${dCount}개) : ${dCount*donkkasue}</li>`;
  }

  const sum = (gimbap * gCount) + (ramen * rCount) + (donkkasue*dCount);

  outputHtml += `<li>합계 : ${sum}원</li>`;

  document.getElementById("result29").innerHTML = outputHtml;

}