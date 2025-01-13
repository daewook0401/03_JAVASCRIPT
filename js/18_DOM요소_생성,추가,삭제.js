// 기준이 되는 box
const standard = document.querySelector("#standard");

// 버튼 5개
const btns = document.querySelectorAll(".btn");

let count = 1; // 요소 내용

// ahems qjxmsdp zmfflr dlqpsxm fltmsjfmf cnrk
for(let btn of btns){
  btn.addEventListener("click", (e) => {
    // e: 이벤트 관련 정보가 담긴 객체
    // e.target : 이벤트가 발생한 객체 (클릭된 버튼)

    const str = e.target.innerText;

    switch(str){
      case "prepend":
        // span 요소를 생성
        const span1 = document.createElement("span");

        // TextNode 생성
        const text1 = document.createTextNode(count);

        // 생성된 TextNode를 span의 자식으로 추가
        span1.appendChild(text1);

        // span1에 배경색 추가
        span1.style.backgroundColor = "skyblue";

        // #standard 요소의 첫 번째 자식으로 추가
        standard.prepend(span1);
        break;
      case "append":
        const span2 = document.createElement("span");
        const text2 = document.createTextNode(count);
        span2.appendChild(text2);
        span2.style.backgroundColor = "lightsalmon";
        standard.append(span2);
        break;
      case "before":
        const div1 = document.createElement("div");
        div1.className = "box";
        div1.style.backgroundColor = "orange";
        div1.innerText = count;
        standard.before(div1);
        break;
      case "after":
        const div2 = document.createElement("div");
        div2.className = "box";
        div2.style.backgroundColor = "springgreen";
        div2.innerText = count;
        standard.after(div2);
        break;
      case "remove":
        // .box 중 #standard를 제외한 모두 선택
        const boxes = document.querySelectorAll(".box:not(#standard)");

        const spans = document.querySelectorAll("#standard > span");
        for(let box of boxes){
          box.remove();
        }
        for(let span of spans){
          span.remove();
        }
        count = 0;
        break;
    } //switch end
    count++;
  });
}