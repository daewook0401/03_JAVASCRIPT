/* 배열 선언 및 기초 사용법 */

function check1(){
  
  //초기화


  // 배열 선언
  const arr1 = new Array(); // 0칸 배열
  const arr2 = new Array(3); // 3칸 배열(요소 모두 비어있음)
  const arr3 = []; // 0칸 배열
  const arr4 = ['사과', '딸기', '바나나']; // 3칸 배열 + 초기화
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  // 배열의 각 요소 접근 방법 -> 배열명[index]
  console.log(`arr4[0] : ${arr4[0]}`);
  console.log(`arr4[1] : ${arr4[1]}`);
  console.log(`arr4[2] : ${arr4[2]}`);
  console.log(`arr4[3] : ${arr4[3]}`); // undefined

  // 배열 요소에 값 대입 : 베열명[index] = 값;
  arr2[0] = 123;
  arr2[1] = "27일은 임시공휴일";
  arr2[2] = true;
  //  (여러 자료형 저장 가능 확인)

  // * 존재하지 않는 index에 값 대입 -> 가능? 불가능?

  arr2[3] = "추가"; // 가능
  arr2[6] = "추가"; // 가능
  // 6번 인덱스 대입됨(확인)
  // 4, 5번 인덱스는 비어있음(확인)
  console.log("arr2 : ", arr2);
}

function check2(){
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];

  // weeks.length === 7
  // weeks의 시작 인덱스 번호 : 0
  // weeks의 마지막 인덱스 번호 : 6 === weeks.length - 1
  // index는 0 이상의 정수
  // index는 1씩 증가
  for(let i=0;i<weeks.length;i++){
    console.log(weeks[i]);
  }
  console.log("====================================");
  for (let i=weeks.length-1;i>=0;i--){
    console.log(weeks[i]);
  }
}

function check3(){
  // prompt로 입력 받은 값을 배열 요소에 순차적으로 초기화

  const arr = []; // 0칸 짜리 배열 -> 값 대입 시 자동으로 증가

  for(let i=0;i<4;i++){ // 0, 1, 2, 3 (4바퀴)
    arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`);
  }
  console.log(arr);
}

/* 
  prompt를 이용해 숫자 5개를 입력 받아 배열에 저장한 후
  1) 저장된 값 출력
  2) 합계 출력
  3) 평균 출력
  4) 짝수번째 index 요소의 합계 출력
  5) 홀수번째 index 요소의 합계 출력
*/
function check4(){
  const arr = new Array(5); //5칸 배열 생성

  for (let i = 0; i < arr.length; i++){
    arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`));
  }
  console.log(arr); 

  let sum = 0; // 합계
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(`합계 : ${sum}`);

  console.log(`평균 : ${sum / arr.length}`);

  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  console.log(`짝수번째 요소의 합계 : ${evenSum}`);
  console.log(`홀수번째 요소의 합계 : ${oddSum}`);
}

function check5(){
  // 배열의 요소를 순차적으로 출력
  const len = Number(prompt("배열의 길이 입력"));
  const arr = new Array(len);
  for (let i = 0; i < len; i++){
    const num = Math.floor(Math.random() * len);
    arr[i] = num;
  }
  console.log(arr);
}



function selectMenu(){
  const menus = [
    '햄버거', '피자', '치킨', '짜장면', '짬뽕', '탕수육',
    '삼겹살', '불고기', '라면', '떡볶이', '순대', '튀김',
    '초밥', '우동', '라멘', '돈까스', '김밥', '커리',
    '찜닭', '닭갈비', '족발', '보쌈', '훠궈', '마라탕',
    '파스타', '스테이크', '샐러드', '갈비찜', '갈비탕',
    '순두부찌개', '김치찌개', '부대찌개', '된장찌개', '감자탕', '해장국',
    '떡국', '만두국', '콩나물국', '육개장', '매운탕', '아구찜',
    '장어구이', '갈치조림', '홍어회', '회덮밥', '물회', '초밥',
    '우동', '라멘', '돈까스', '김밥', '커리', '찜닭',
    '곰탕', '설렁탕', '뼈해장국', '순대국', '순대볶음', '순대국밥',
    '머리국밥', '닭발'
  ];
  const num = Math.floor(Math.random() * menus.length);
  document.getElementById("menuResult").innerText = menus[num];
}

function createLottoNumber(){
  const lotto = document.getElementById("lotto");
  lotto.innerHTML = "";
  const lottoNumbers = [];
  while (lottoNumbers.length < 6){
    const num = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(num)){
      lottoNumbers.push(num);
    }
  }
  lottoNumbers.sort(function(a, b){return a - b});
  for(let i=0;i<lottoNumbers.length;i++){
    const div = document.createElement("div");
    div.innerText = lottoNumbers[i];
    lotto.appendChild(div);
  }
}

function check6(){
  const num1 = 10;
  const num2 = 20;
  const num3 = 30;

  const arr1 = [num1, num2, num3];
  const arr2 = [40, 50, 60];
  const arr3 = [70, 80, 90];

  const dArr1 = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
  ];

  const dArr2 = [arr1,arr2,arr3];

  console.log("dArr1 : ", dArr1);
  console.log("dArr2 : ", dArr2);

  console.log("dArr2[0] : ", dArr2[0]);
  console.log("dArr2[0] : ", dArr2[0].length);
  console.log("dArr2[1] : ", dArr2[1]);
  console.log("dArr2[1] : ", dArr2[1].length);
  console.log("dArr2[2] : ", dArr2[2]);
  console.log("dArr2[2] : ", dArr2[2].length);

  console.log("dArr2[0][0] : ", dArr2[0][0]);
  dArr2[0][0] = 100;
  console.log("dArr2[0][0] : ", dArr2[0][0]);
}


/* 4행 4열 짜리 2차원 배열에 1~16 사이 난수 배치(중복 안됌) 
   1) 배열 콘솔에 출력
   2) prompt를 이용해서 1~16 사이 숫자를 입력 받아
      2차원 배열 어디에 위치하는지 검색해서 출력하기
*/

/* function check7(){
  // 중복되지 않는 난수 16개를 저장한 1차원 배열 생성
  const randomArr = [];

  while(randomArr.length < 16){
    const num = Math.floor(Math.random() * 16+1);
    if (!randomArr.includes(num)){
      randomArr.push(num);
    }
  }
  console.log(randomArr);
  // 2중 for문을 이용해서 2차원 배열 모든 요소 접근하기
  const arr = [];
  let count = 0;
  for(let row=0;row<4;row++){
    arr[row] = [];
    for(let col=0;col<4;col++){
      arr[row][col] = randomArr[count++];
    }
  }
  console.log(arr);
  
  while(true){
    num = prompt("1~16 사이 숫자 입력");
    if (num === null){
      break;
    }
    if (Number(num) < 1 || Number(num) > 16){
      alert("1~16 사이 숫자만 입력 가능합니다.");
      continue;
    }
    for(let row=0;row<4;row++){
      for(let col=0;col<4;col++){
        if (arr[row][col] == Number(num)){
          alert(`[${row}][${col}] 위치에 있습니다.`);
          isFind = true;
          break;
        }
      }
    }
  }
} */

function check7() {
  // 1~16 사이의 중복되지 않는 난수 배열 생성
  const randomArr = Array.from({ length: 16 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

  // 2차원 배열 생성
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(randomArr.slice(i * 4, i * 4 + 4));
  }
  console.log(arr);

  // 숫자 검색 로직
  while (true) {
    const input = prompt("1~16 사이 숫자 입력");
    if (input === null) break;

    const num = Number(input);
    if (num < 1 || num > 16) {
      alert("1~16 사이 숫자만 입력 가능합니다.");
      continue;
    }

    // 2차원 배열 검색
    const found = arr.some((row, rowIndex) => {
      const colIndex = row.indexOf(num);
      if (colIndex !== -1) {
        alert(`[${rowIndex}][${colIndex}] 위치에 있습니다.`);
        return true;
      }
    });

    if (!found) alert("숫자를 찾을 수 없습니다.");
  }
}
  