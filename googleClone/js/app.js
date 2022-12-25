const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const classNameHidden = "hidden";
const USERNAME_KEY = "username";

function loginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(classNameHidden);
  saveName(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function saveName(name) {
  greeting.classList.remove(classNameHidden);
  greeting.innerText = `Your name is ${name}`;
}

if (savedUsername === null) {
  loginForm.classList.remove(classNameHidden);
  loginForm.addEventListener("submit", loginBtnClick);
} else {
  saveName(savedUsername);
}
