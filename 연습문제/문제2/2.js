const result = document.querySelector("#result");

const container = document.querySelector(".container");
container.addEventListener("click", (e)=>{
  if(result.innerHTML.length === 13){
    return;
  }
  if(e.target.className !== "number"){
    return;
  }
  result.append(Number(e.target.innerText));
  if (result.innerHTML.length === 3){
    result.append("-");
  }
  if (result.innerHTML.length === 8){
    result.append("-");
  }
  const setNum = result.innerHTML.length;
  if (result.innerHTML.length-1 === "-"){
    
  }
  console.log(result.innerHTML[result.innerHTML.length-1]);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
  result.innerHTML = "";
})

