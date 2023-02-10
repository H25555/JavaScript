
function chia(){
    let n1= document.getElementById('num1').value;
    let n2= document.getElementById('num2').value;
    let Result= n1/n2
document.getElementById("r").innerHTML=Result
}
function nhan(){
    let n1= document.getElementById('num1').value;
let n2= document.getElementById('num2').value;
let Result= n1*n2
document.getElementById("r").innerHTML=Result
}
function cong(){
    let n1= document.getElementById('num1').value;
let n2= document.getElementById('num2').value;
let Result= n1++ + n2++
document.getElementById("r").innerHTML=Result
}
function tru(){
    let n1= document.getElementById('num1').value;
let n2= document.getElementById('num2').value;
let Result= n1-n2
document.getElementById("r").innerHTML=Result
}

