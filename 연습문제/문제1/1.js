const createBtn = document.querySelector("#btn");
createBtn.addEventListener("click", () => {
  const input = createBtn.previousElementSibling;
  const value = Number(input.value);
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for(let i=0; i<value; i++){
    const createInput = document.createElement("input");
    const div = document.createElement("div");
    createInput.type = "number";
    createInput.className = "input-number";
    div.append(createInput);
    container.appendChild(div);
  }
});

const sumBtn = document.querySelector("#sumBtn");
sumBtn.addEventListener("click", () => {
  const inputNumber = document.querySelectorAll(".input-number");
  let sum = 0;
  for(let i of inputNumber){
    sum += Number(i.value);
  }
  const result = sumBtn.nextElementSibling;
  result.innerHTML = sum;
});