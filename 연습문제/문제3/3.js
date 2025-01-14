const countBtn = document.querySelector("#btn");
const result = document.querySelector("#result");

countBtn.addEventListener("click", () =>{
  var str = '';
  let resultSum = 0;
  const fruit = document.querySelectorAll(".fruit:checked");
  for(let check of fruit){
    const parent = check.parentElement;
    str += `${parent.children[1].innerHTML} ${parent.children[3].value}개 `;
    const won = parent.children[2].innerHTML * parent.children[3].value;
    resultSum += won;
  }
  result.innerHTML = `${str} 총합 ${resultSum}원`;
})
