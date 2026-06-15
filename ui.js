function showToast(msg){

let toast=
document.getElementById("toast");

if(!toast) return;

toast.innerText=msg;
toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},3000);

}

let themeBtn=
document.getElementById("themeToggle");

if(themeBtn){

themeBtn.onclick=()=>{

document.body
.classList.toggle("dark");

};

}

let passwordField=
document.getElementById("password");

let strength=
document.getElementById("strength");

if(passwordField && strength){

passwordField.addEventListener(
"input",
()=>{

let len=
passwordField.value.length;

if(len<6){
strength.innerHTML="🔴 Weak";
}
else if(len<10){
strength.innerHTML="🟡 Medium";
}
else{
strength.innerHTML="🟢 Strong";
}

});

}
