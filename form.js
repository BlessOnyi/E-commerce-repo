const myForm = document.getElementById("myForm")
const email = document.getElementById("email")
const password = document.getElementById("password")

const title = document.getElementById("title");
const nameField= document.getElementById("nameField");
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");

myForm.addEventListener("submit",formEvent);
function formEvent(e) {
    e.preventDefault()
    console.log("Form Submitted");
}

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML ="Sign In"
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}