// 컴퓨터 숫자 생성
let computerNumbers = generateRandomNumbers();
let attempts = 0; // 시도 횟수 기록

function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

function playGame() {
  const userInput = document.getElementById("userInput").value;

  // 입력 유효성 검사
  if (userInput.length !== 4 || isNaN(userInput)) {
    alert("4자리 숫자를 정확히 입력해주세요.");
    return;
  }

  const userNumbers = userInput.split("").map(Number);

  // 중복 숫자 검사
  if (hasDuplicate(userNumbers)) {
    alert("중복되지 않은 숫자를 입력해주세요.");
    return;
  }

  const { strike, ball } = calculateScore(userNumbers);

  attempts++;
  const resultMessage = `${userInput} => ${strike}S ${ball}B`;
  document.getElementById("result").textContent = resultMessage;
  document.getElementById("history").innerHTML += `<p>시도 ${attempts}: ${resultMessage}</p>`;

  if (strike === 4) {
    alert(`축하합니다! ${attempts}번 만에 정답을 맞췄습니다.`);
    resetGame();
  }
}

function hasDuplicate(numbers) {
  const uniqueNumbers = new Set(numbers);
  return uniqueNumbers.size !== numbers.length;
}

function calculateScore(userNumbers) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 4; i++) {
    if (userNumbers[i] === computerNumbers[i]) {
      strike++;
    } else if (computerNumbers.includes(userNumbers[i])) {
      ball++;
    }
  }

  return { strike, ball };
}

function resetGame() {
  computerNumbers = generateRandomNumbers();
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("history").innerHTML = "";
  document.getElementById("userInput").value = "";
}

// 버튼 클릭 이벤트 연결
document.getElementById("playButton").addEventListener("click", playGame);

// Enter 키 입력 이벤트 연결
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    playGame();
  }
});
