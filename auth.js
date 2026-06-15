document
.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let user =
JSON.parse(
localStorage.getItem("user")
);

if(
user &&
user.email===email &&
user.password===password
){

sessionStorage.setItem(
"loggedIn",
"true"
);

showToast("Login Successful");

setTimeout(()=>{
window.location.href=
"dashboard.html";
},1500);

}else{
showToast("Invalid Credentials");
}

});

function togglePassword(id){

let field=
document.getElementById(id);

field.type=
field.type==="password"
?"text"
:"password";

}
