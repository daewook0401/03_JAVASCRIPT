const colect = document.querySelector("#colect");
colect.addEventListener("click", ()=>{
  const inputTag =document.querySelectorAll(".input-tag > input");
  let checked = true;
  inputTag.forEach((item, index)=>{
    if(item.value.trim() ===''){
      checked=false;
    }
  });
  if (!checked){
    alert("모든 필드를 입력해주세요.");
    return;
  }
  var checkResult = checkedUser(inputTag[0].value,inputTag[2].value);

  if (!checkResult){
    return;
  }
  createTable(inputTag);
});


function checkedUser(id, phone){
  let che = true;
  const userTable = document.querySelectorAll("#user-table > tr");
  userTable.forEach((item, index) => {
    if (item.children[1].innerText===id){
      alert("이미 존재하는 아이디 입니다.");
      che = false;
      return;
    }
    if (item.children[3].innerText===phone){
      alert("이미 등록된 전화번호 입니다.");
      che = false;
      return;
    }
  });
  return che;
}

function createTable(inputTag){
  const tbody = document.querySelector("#user-table");
  const tr = document.createElement("tr");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "checkBox";
  const td1 = document.createElement("td");
  td1.append(input);
  tr.append(td1);
  inputTag.forEach((item)=>{
    const td2 = document.createElement("td");
    td2.append(item.value);
    tr.append(td2);
    item.value='';
  });
  tbody.append(tr);
  input.addEventListener("change", ()=>{
    if (allCheck.checked === true && allCheck.checked !== input){
      allCheck.checked = false;
    }
    if (allCheck.checked !== input && allCheckBox()){
      allCheck.checked = true;
    }
  });
}
function allCheckBox(){
  const checkBoxs = document.querySelectorAll(".checkBox");
  let result = true;
  checkBoxs.forEach((item)=>{
    if(!item.checked){
      result = false;
    }
  });
  return result;
}
const allCheck = document.querySelector("#all-check");
allCheck.addEventListener("change", ()=>{
  const checkBoxs = document.querySelectorAll(".checkBox");
  checkBoxs.forEach((item)=>{
    item.checked=allCheck.checked;
  });
});

const userDelete = document.querySelector("#user-delete");
userDelete.addEventListener("click", ()=>{
  let count = 0;
  const checkBoxs = document.querySelectorAll(".checkBox");
  checkBoxs.forEach((item)=>{
    if (item.checked){
      item.parentElement.parentElement.remove();
    }
    else{
      count ++;
    }
  });
  if (count === checkBoxs.length){
    alert("삭제할 항목을 체크해주세요.");
    return;
  }
});