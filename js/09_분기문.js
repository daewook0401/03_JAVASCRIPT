function check1(){

  const stopNumber = Number(prompt("1~20 사이 멈추고 싶은 숫자 입력"));

  for(let num=1; num<=20; num++){
    console.log(num);
    if (num===stopNumber){
      break;
    }
  }
}

function check2(){
  
  let num=1;
  while(true){
    console.log(num++);
    if(num===100){
      break;
    }
  }
}

function check3(){
  let sum=0;
  while(true){
    const value = prompt("숫자 입력(취소 시 종료");
    if(value===null){
      break;
    }
    sum+=Number(value);
  }
  alert(`합계 : ${sum}`);
}

function check4(){

  for(let n1=1;n1<=3;n1++){
    let result = '';
    for(let n2=1;n2<=5;n2++){
      result+=n2;
      if (n2===4){
        break;
      }
    }
    console.log(result);
    if (n1===2){
      break;
    }
  }
}

function check5(){
  //1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
  //단, 3과 5의 배수는 건너뛰기
  let result='';
  for(let num=1;num<=20;num++){
    if (num%3===0 || num%5===0){
      continue;
    }
    result+=num + ' ';
  }
  console.log(result);
}

/* 123456789 를 5줄 출력
1번 줄 출력시 1 제외
2번 줄 출력시 2 제외
3번 줄 출력시 3 제외
4번 줄 출력시 4 제외
5번 줄 출력시 5 제외
 */
function check6(){

  for(let n1=1;n1<=5;n1++){
    let result='';
    for(let n2=1;n2<=9;n2++){
      if (n2===n1){
        continue;
      }
      result+=n2;
    }
    console.log(result);
  }

  console.log("------------");

  
  for(let n1=1;n1<=5;n1++){
    let result2='123456789';
    result2 = result2.replace(n1, '');
    console.log(result2);
  }
}

function test(){
  for(let n1=10; n1>=1;n1--){
    for(let n2=1;n2<=10;n2++){

    }
  }
}

function startGame(){

  const answer = Math.floor(Math.random()*200)+1;
  let count = 0;
  let a = true;
  while(a){
    count++;
    if (count>7){
      alert(`7회 초과로 실패!(정답:${answer})`);
      break;
    }


    const cir = prompt("숫자를 입력해주세요.");
    const cirNum=Number(cir);
    
    
    if (cir===null){
      alert(`${count}번째에서 포기 하셨습니다(정답:${answer})`);
      break;
    }


    if (cir.length === 0){
      alert("다시 입력해주세요");
      count--;
      continue;
    }
    if (cirNum<1 || cirNum>200){
      alert("1~200 사이 숫자만 입력");
      count--;
      continue;
    }


    if(cirNum<answer){
      alert(`UP (현재 ${count}회)`);
      continue;
    }
    if(cirNum>answer){
      alert(`DOWN (현재 ${count}회)`);
      continue;
    }
    alert(`정답!!! ${answer} / 시도 횟수 : ${count}번`);
    a=false;
  }
}