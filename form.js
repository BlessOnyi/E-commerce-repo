

const myForm = document.getElementById("myForm"); 
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone"); 
const password = document.getElementById("password");
const output = document.querySelector(".output");
myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // console.log(email.value, username.value, password.value);
        if (firstname.value.length === 0) {
            output.innerHTML = "Please enter your firstname"; 
            output.style.color = "red";
            output.style.fontSize = "0.9rem";
             output.style.fontFamily = "roboto";
            }else if (lastname.value.length === 0){
                output.innerHTML = "Please enter your last name"; 
                output.style.color = "red";
                output.style.fontSize = "0.9rem";
                 output.style.fontFamily = "roboto";
            }else if (email.value.length ===0){
                output.innerHTML = "Please enter your Email"; 
                output.style.color = "red";
                output.style.fontSize = "0.9rem";
                output.style.fontFamily = "roboto";
            }else if (password.value.length ===0){
                output.innerHTML = "Please enter your Password"; 
            output.style.color = "red";
            output.style.fontSize = "0.9rem";
             output.style.fontFamily = "roboto"; 
            }else if (password.value.length <= 4 || password.value.length > 8){
                output.innerHTML = "Password must not exceed 8"; 
                output.style.color = "red";
                output.style.fontSize = "0.9rem";
                 output.style.fontFamily = "roboto";
            }else{
                output.innerHTML = "Successfully signed in"; 
                output.style.color = "red";
                output.style.fontSize = "0.9rem";
                 output.style.fontFamily = "roboto";
                }
        const myForm = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        };
        localStorage.setItem("formData", JSON.stringify(myForm))
});

