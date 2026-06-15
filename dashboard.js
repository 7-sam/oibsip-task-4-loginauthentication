if(
sessionStorage.getItem("loggedIn")
!=="true"
){
window.location.href="index.html";
}

let user=
JSON.parse(
localStorage.getItem("user")
);

document.getElementById(
"welcome"
).innerText=
`Welcome, ${user.name}`;

document.getElementById(
"emailDisplay"
).innerText=
user.email;

function logout(){

sessionStorage.removeItem(
"loggedIn"
);

window.location.href=
"index.html";

}
