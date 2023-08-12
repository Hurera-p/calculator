let a =[];

document.getElementById("box1").addEventListener("click", function numb(){
a.push("1")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})

document.getElementById("box2").addEventListener("click", function numb1(){
a.push("2");
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})

document.getElementById("box3").addEventListener("click", function numb2(){
a.push("-")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box4").addEventListener("click", function numb2(){
a.push("3")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box5").addEventListener("click", function numb2(){
a.push("4")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box6").addEventListener("click", function numb2(){
a.push("*")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box7").addEventListener("click", function numb2(){
a.push("5")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box8").addEventListener("click", function numb2(){
a.push("6")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box9").addEventListener("click", function numb2(){
a.push("/")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box10").addEventListener("click", function numb2(){
a.push("7")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box11").addEventListener("click", function numb2(){
a.push("8")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box12").addEventListener("click", function numb2(){
a.push("+")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box13").addEventListener("click", function numb2(){
a.push("9")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box14").addEventListener("click", function numb2(){
a.push("0")
let new_array = a.join('');
document.getElementById("box").innerHTML = new_array;
})  

document.getElementById("box15").addEventListener("click", function numb3(){
let new_array = a.join('');
document.getElementById("box").innerHTML = eval(new_array);
})

document.getElementById("box16").addEventListener("click", function numb2(){
location.reload();
})  