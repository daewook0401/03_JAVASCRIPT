
const images = ["짱구1.gif", "짱구2.gif", "짱구3.gif", "짱구4.gif", "짱구5.gif"];

const keys = document.querySelectorAll('.key');
/* document.addEventListener('keydown', function(e) {
  let index;
  switch (e.key.toLowerCase()){
    case 'q': index=0; break;
    case 'w': index=1; break;
    case 'e': index=2; break;
    case 'r': index=3; break;
    default : return;
  }
  keys[index].style.backgroundImage = `url(../images/${images[index]})`;
});

document.addEventListener('keyup', function(e) {
  let index;
  switch (e.key.toLowerCase()){
    case 'q': index=0; break;
    case 'w': index=1; break;
    case 'e': index=2; break;
    case 'r': index=3; break;
    default : return;
  }
  keys[index].style.backgroundImage = "none";
}); */


//재사용 코드
for(let i=0;i<keys.length;i++){
  document.addEventListener('keydown', function(e) {
    if (e.key.toUpperCase() === keys[i].innerText.toUpperCase()){
      keys[i].style.backgroundImage = `url(../images/${images[i]})`;
    }
  });
  document.addEventListener('keyup', function(e) {
    if (e.key.toUpperCase() === keys[i].innerText.toUpperCase()){
      keys[i].style.backgroundImage = "none";
    }
  });
}

const cursorImage = document.querySelector("#cursorImage");

// 문서 자체에 마우스가 움직였을 때 (mousemove)에 대한 동작
document.addEventListener('mousemove', function(e){
  cursorImage.style.left = `${e.pageX - 10}px`;
  cursorImage.style.top = `${e.pageY + 5}px`;
});