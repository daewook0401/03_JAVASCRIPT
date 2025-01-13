const countBtn = document.querySelector("#btn");
const result = document.querySelector("#result");

countBtn.addEventListener("click", () =>{
  result.innerHTML = "";
  let resultSum = 0;
  const fruit = document.querySelectorAll(".fruit");
  for(let check of fruit){
    if (!check.checked){
      continue;
    }
    const parent = check.parentElement;
    const label = document.createElement("label");
    const span1 = document.createElement("span");
    span1.innerHTML = parent.children[1].innerHTML + " ";
    const span2 = document.createElement("span");
    span2.innerHTML = parent.children[3].value + "개 ";
    label.append(span1);
    label.append(span2);
    result.append(label);
    const won = parent.children[2].innerHTML * parent.children[3].value;
    resultSum += won;
  }
  result.append(` 총합 ${resultSum}원`)
})