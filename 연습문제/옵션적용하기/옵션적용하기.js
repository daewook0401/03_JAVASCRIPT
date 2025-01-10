const btn = document.querySelector("#col")
const display = document.querySelector("#display");
const boxWeight = document.querySelector("#boxWidth");
const boxHeight = document.querySelector("#boxHeight");
const fontSize = document.querySelector("#fontSize");
const backgroundColor = document.querySelector("#color");
const textColor = document.querySelector("#textColor");

btn.addEventListener("click", function(){
  display.innerText = null;
  display.style.border="1px solid black";
  display.style.width = boxWeight.value + "px";
  display.style.height = boxHeight.value + "px";
  display.style.fontSize = fontSize.value + "px";
  display.style.backgroundColor = backgroundColor.value;
  display.style.color = textColor.value;
  
  const fw = document.querySelector("[name=fontWeight]:checked").value;
  display.style.fontWeight = fw;
  const row = document.querySelector("[name=textAlign]:checked").value;
  const column = document.querySelector("[name=verticalAlign]:checked").value;  
  display.style.textAlign = row;
  display.style.verticalAlign = column;

  const text = document.querySelector("#text").value;
});

