const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let myToDo = [];

function storeToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(myToDo));
}

function clickDelBtn(event) {
  const li = event.target.parentElement;
  li.remove();
  myToDo = myToDo.filter((toDo) => toDo.id !== parseInt(li.id));
  storeToDo();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", clickDelBtn);
  list.appendChild(span);
  list.appendChild(delBtn);
  toDoList.appendChild(list);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  myToDo.push(newToDoObj);
  paintToDo(newToDoObj);
  storeToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  myToDo = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//필터펑션은 새 array에도 object를 유지하려면 무조건 true를 리턴해야한다
// 현재의 todo랑 저장된 todo가 다르면 된다
//sexyfilter엔 현재의 todo
//저장된todo.filer(sexyfilter)
