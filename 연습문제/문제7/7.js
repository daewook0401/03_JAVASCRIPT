const create = document.querySelector("#create");
const reset = document.querySelector("#reset");
const choice = document.querySelector("#choice");
const box = document.querySelector(".box");

let count = 0;

create.addEventListener("click", ()=>{
  let createNum;
  for(let i=1;i<=45;i++){
    createNum = createLotto(i);
    box.append(createNum);
  }
  reset.classList.remove("hidden-btn");
  choice.classList.remove("hidden-btn");
  create.classList.add("hidden-btn");
});

function createLotto(num){
  const div = document.createElement("div");
  div.className="lottoNum";
  div.innerText = num;
  div.addEventListener("click", ()=>{
    if (count===6 && !div.classList.contains("lottoNum-checked")){
      alert(`6개 까지만 선택할 수 있습니다.`);
      return;
    }
    div.classList.toggle("lottoNum-checked");
    div.classList.contains("lottoNum-checked") ? count++ : count--;
  });
  return div;
}

reset.addEventListener("click", ()=>{
  resetButton();
});

choice.addEventListener("click", ()=>{
  const ranTime = Math.floor(Math.random()*(3000-1000)+1000);
  setTimeout(()=>{
    clearInterval(currentInterval);
  }, ranTime);
  currentInterval = setInterval(()=>{
    randomeChoice();
  }, 50);
});

function resetButton(){
  const lottoNum = box.children;
  for(let index of lottoNum){
    index.classList.remove("lottoNum-checked");
    count=0;
  }
}
function randomeChoice(){
  resetButton();
  const lottoNum = box.children;
  const arr = [];
  while(arr.length<6){
    let ran = Math.floor(Math.random() * 45);
    if (arr.includes(ran)){
      continue;
    }
    arr.push(ran);
  }
  arr.forEach((item)=>{
    lottoNum[item].classList.add("lottoNum-checked");
    count++;
  });
}