let trueC = 0;
const startBtn = document.querySelector('#startBtn');
const btn = document.querySelectorAll(".user-btn > .btn");
const computer = ["가위", "바위", "보"];
const imageBox = document.querySelectorAll(".box");
const resultTable = document.querySelectorAll(".result-table #score th");
const gameHistory = document.querySelector("#gameHistory");
let num = 0;
let count = 0;
for (let i =0; i<3; i++){
  btn[i].addEventListener("click", e => {
    if (trueC === 0){
      alert("GAME START 버튼을 눌러 게임을 시작해 주세요!!");
      return;
    }
  });
}

startBtn.addEventListener("click", ()=> {
  const round = prompt("진행할 판 수를 입력하세요");
  if (round === null){
    return alert("숫자 입력 후 확인을 눌러주세요");
  }
  num = Number(round);
  trueC = 1;
  for(let i of imageBox){
    i.innerHTML = '';
  }
  for(let i of resultTable){
    i.innerText = 0;
  }
  gameHistory.innerHTML = '';
  count = 0;
});
for(let i = 0; i<3; i++){
  btn[i].addEventListener("click", (e) => {
    if (count === num){
      console.log("게임 종료");
      alert("게임이 종료되었습니다. 다시 하시려면 GAME START 버튼을 눌러주세요");
      return;
    }
    const computerChoice = Math.floor(Math.random() * 3 );
    const userChoice = e.target.innerHTML;
    imageBox[0].innerHTML = `<img src="images/${userChoice}L.png" id="user">`;
    imageBox[1].innerHTML = `<img src="images/${computer[computerChoice]}R.png" id="com">`;

    const history = document.createElement("li");
    const userSpan = document.createElement("span");
    const comSpan = document.createElement("span");
    const resultSpan = document.createElement("span");
    const vs = document.createTextNode(" vs ");
    userSpan.innerHTML = userChoice;
    comSpan.innerHTML = computer[computerChoice];
    if (userChoice === computer[computerChoice]){
      //비김
      resultSpan.className = "draw";
      resultSpan.innerText = "DRAW";
      resultTable[1].innerHTML = Number(resultTable[1].innerHTML)+1;
    }
    if ((userChoice === "가위" && computer[computerChoice] === "바위") || (userChoice === "보" && computer[computerChoice] === "가위") || (userChoice === "바위" && computer[computerChoice] === "보")){
      resultSpan.className = "lose";
      resultSpan.innerText = "LOSE";
      resultTable[2].innerHTML = Number(resultTable[2].innerHTML)+1;
    }
    if ((userChoice === "가위" && computer[computerChoice] === "보") || (userChoice === "바위" && computer[computerChoice] === "가위") || (userChoice === "보" && computer[computerChoice] === "바위")){
      resultSpan.className = "win";
      resultSpan.innerText = "WIN";
      resultTable[0].innerHTML = Number(resultTable[0].innerHTML)+1;
    }
    count++;
    history.append(resultSpan, userSpan, vs, comSpan);
    gameHistory.append(history)
  });
}