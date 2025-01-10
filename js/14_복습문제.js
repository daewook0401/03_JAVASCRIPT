

const container = document.querySelectorAll(".container");
const opacity = document.querySelector(".opacity-container")

//키를 땔시에 변화
for(let i of container){
  i.querySelector(".color-input").addEventListener('keyup', function(e) {
    i.querySelector(".box").style.backgroundColor = i.querySelector(".color-input").value;
  });
  opacity.addEventListener('change', function(e) {
    if (i===container[0]){
      console.log(e.target.value);
    }
    
    /* const selectedValue = document.querySelector('input[name="opacity-btn"]:checked').value;
    console.log(selectedValue); */
    i.querySelector(".box").style.opacity = e.target.value;
  });
}

// chage 이벤트 :
// input에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때

/* 
getElemetsByName("opacity-btn")
querySelectorAll("[name=opacity-btn]")
querySelectorAll(".opacity-btn > input")
*/

const radioBtns = document.querySelectorAll("[name=opacity-btn]");
for(let i = 0; i < radioBtns.length; i++){
  //라디오 버튼의 값이 변했을 때를 감지
  radioBtns[i].addEventListener('change', function(e){
    // e : 이벤트 객체(이벤트 관련 정보가 담겨있음)
    //향상된 for문
    // 배열에 저장된 모든 요소를 순차접근하는 용도의 for문
    // 순차 접근 상황이 빈번히 발생하여
    // 작성법을 간단하게 변화시킴
    /* 
      [for of 구문]
      for (let 변수명 of 배열명){}
      - for문이 반복 될 때 마다
        배열 내 요소를 0번 부터 하나씩 꺼내서
        of 앞에 변수에 대입하는 for문
    */
  });

}