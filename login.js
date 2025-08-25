let form = document.getElementById("form");
// console.log(form)

let submit_btn = document.getElementById("submit_btn");
// console.log(form)

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("fill the form");
  }
});

let show_pwd = document.getElementById("show_pwd");
let password = document.getElementById("password");
let emoji = document.getElementById("emoji");
show_pwd.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value != "") {
    if (password.type != "text") {
      password.type = "text";
      show_pwd.innerHTML = "hide password";
      emoji.innerHTML = "🙈";
    } else {
      password.type = "password";
      show_pwd.innerHTML = "show password";
      emoji.innerHTML = "🐵";
    }
  } else {
    alert("please fill the password");
  }
});

let username = document.getElementById("username");
console.log(username);
let error1 = document.getElementById("error1")

username.addEventListener("keyup", (e) => {
  let validation = username.value.length < 8;

  if (validation == true) {
    username.classList.add("warning");
    username.classList.remove("success");
    error1.innerHTML = "please add max 8 char"
  } else {
    username.classList.add("success");
    username.classList.remove("warning");
    error1.innerHTML = ""

  }
});



let error2 = document.getElementById("error2")
password.addEventListener("keyup", (e) => {
  let validation = password.value.length < 8;

  if (validation == true) {
    password.classList.add("warning");
    password.classList.remove("success");
    error2.innerHTML = "please add max 8 char"
  } else {
    password.classList.add("success");
    password.classList.remove("warning");
    error2.innerHTML = ""

  }
});