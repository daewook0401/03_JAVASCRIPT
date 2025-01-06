/* 전역 변수(JS 전체에서 공용으로 사용할 수 있는 변수) */

// 잔액이 출력 되는 span 요소
const output = document.getElementById("output");

//금액이 입력되는 input 요소
const amoumt = document.getElementById("amount");

// 잔액을 기록할 변수(초기값 10000)
let balance = 10000;

// 비밀번호 저장 변수( 초기값 : "1234")
const password = "1234"; 

// ---------------------------------------------------------------

// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩(랜더링) 시


output.innerText = balance;

amount.value=""; // input에 작성된 값을 삭제하는 효과
// -> 입, 출금 함수 마지막에 사용하세요.

function test(){
  // prompt(내용)
  // - 알림창에 값을 입력할 수 있는 형태

  // - 확인 클릭 : 입력 된 값 반환
  // - 취소 클릭 : null qksghks
  
  const pw = prompt("비밀번호를 입력하세요.");

  console.log("pw : ", pw);

  if (pw === null){
    alert("비밀번호 입력 취소됨");
    return;
  }

  if(pw !== password){
    alert("비밀번호가 일치하지 않습니다");
  return;
  }
  alert("출금 기능 수행");

}

/**입금 */
function deposit(){
  const Num = Number(amount.value);
  if (Num <= 0 || isNaN(Num)){
    alert("금액 입력이 잘못되었습니다.");
    return;
  }
  balance+=Num;
  output.innerText=balance;
  amount.value="";
}

/**출금 */
function withdrawal(){
  const Num = Number(amount.value);
  if (Num <= 0 || isNaN(Num)){
    alert("금액 입력이 잘못되었습니다.");
    return;
  }
  if (prompt("비밀번호 입력")!==password){
    alert("비밀번호가 일치하지 않습니다");
    return;
  }
  if (Num > balance){
    alert("출금 금액이 잔액보다 클 수 없습니다");
    return;
  }
  balance-=Num;
  output.innerText=balance;
  amount.value="";
  alert(`${Num}원이 출금 되었습니다. 남은 잔액 : ${balance}원`)
}