
//화면
const display = document.querySelector("#display");

//버튼
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");

//기록
const recordContainer = document.querySelector("#recordContainer");

const timeList = document.querySelectorAll("#display > span");

let count = 0; // 1/100 초 마다 1씩 증가
// START 버튼 클릭 시 수행되는 setInterval() 저장 변수
let currentInterval;

startBtn.addEventListener("click", () => {
  

  if (startBtn.innerText === "PAUSE"){
    startBtn.innerText = "START";
    recordBtn.disabled = true;

    // setInterval()을 깨끗이 치워버림
    // -> clearInterval()
    clearInterval(currentInterval);
    return;
  }
  startBtn.innerText = "PAUSE";
  recordBtn.disabled = false;

  currentInterval = setInterval(()=>{
    count++;
    displayOutput();
  }, 10);
});

resetBtn.addEventListener("click", ()=>{
  startBtn.innerText = "START";
  recordBtn.disabled = true;
  clearInterval(currentInterval);
  recordContainer.innerHTML = "";
  count=0;
  displayOutput()
});

function attachZero(num){
  if(num<10) return "0" + num;
  return num + "";
}

function displayOutput(){
  const min = attachZero(Math.floor(count / 100 / 60));
  const sec = attachZero(Math.floor(count / 100 % 60));
  const ms =  attachZero(count%100);

  if (min !== timeList[0].innerText){
    timeList[0].innerHTML=min;
  }
  if (sec !== timeList[1].innerText){
    timeList[1].innerHTML=sec;
  }
  timeList[2].innerHTML=ms;
}
recordBtn.addEventListener("click", ()=>{
  const li = document.createElement("li");
  li.innerText = display.innerText;
  recordContainer.append(li);
});

/* clearInterval() 사용 방법

  1. setInterval() 수행 후 반환 되는 값을 변수에 대입
    ex) const currentInterval = setInterval();
  
  2. clearInterval(변수명) 수행

*/