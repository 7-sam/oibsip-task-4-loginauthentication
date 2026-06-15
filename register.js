document
.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let confirm =
document.getElementById("confirmPassword").value;

if(password !== confirm){
showToast("Passwords do not match");
return;
}

let user={
name,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

showToast("Registration Successful");

setTimeout(()=>{
window.location.href="index.html";
},1500);

});
