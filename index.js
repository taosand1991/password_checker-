let password = "";

const strongPassword =
  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
const mediumPassWord = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

let passwordName = document.getElementById("pass-name");
let checker = document.querySelector(".checker");
let box = document.getElementById("inner-color");

let isUpperLetter = document.getElementById("uppercase");

let isLowerLetter = document.getElementById("lowercase");

let isNumber = document.getElementById("number");

let isSpecial = document.getElementById("special-character");

window.onload = function () {
  document.getElementById("password").addEventListener("input", function (e) {
    password = e.target.value;
    checker.style.display = "flex";

    const strong = strongPassword.test(password);
    const medium = mediumPassWord.test(password);

    if (/^(?=.*[A-Z])/.test(password)) {
      isUpperLetter.style.color = "green";
    } else {
      isUpperLetter.style.color = "black";
    }

    if (/^(?=.*[a-z])/.test(password)) {
      isLowerLetter.style.color = "green";
    } else {
      isLowerLetter.style.color = "black";
    }

    if (/^(?=.*[0-9])/.test(password)) {
      isNumber.style.color = "green";
    } else {
      isNumber.style.color = "black";
    }

    if (/^(?=.*[^\w\s])/.test(password)) {
      isSpecial.style.color = "green";
    } else {
      isSpecial.style.color = "black";
    }

    if (e.target.value === "") {
      password = "";
      checker.style.display = "none";
    }

    if (password.length < 6) {
      box.style.backgroundColor = "red";
      box.style.width = "20%";
      passwordName.innerText = "weak password";
    }

    if (medium && password.length > 6) {
      box.style.backgroundColor = "orange";
      box.style.width = "50%";
      passwordName.innerText = "medium password";
    }

    if (strong) {
      box.style.backgroundColor = "green";
      box.style.width = "100%";
      passwordName.innerText = "strong password";
    }
  });
};
