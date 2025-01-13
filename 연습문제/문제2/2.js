const result = document.querySelector("#result");

const container = document.querySelector(".container");
container.addEventListener("click", (e)=>{
  if(e.target.className !== "number"){
    return;
  }
  result.append(Number(e.target.innerText));
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
  result.innerHTML = "";
})