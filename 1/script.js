const btn = document.querySelector('.res-btn');
const input1 = document.querySelector ('a');
const input2 = document.querySelector ('b');
const input3 = document.querySelector ('c');

btn.addEventListener('click', function (event) 
{

let a=input1.value;
let b=input2.value;
let c=input3.value;
let d= Math.pow(b) - (4*a*c);
alert(d);

if (d < 0)
{
    alert("Неопределен")
}

if (d > 0) 
{

let x1 = -b + Math.sqrt(d) / 2 * a;
let x2 = -b - Math.sqrt(d) / 2 * a;
alert('x1 = ' + x1);
alert('x2 = ' + x2);
}
if (d == 0) {
    let x = (-b) / 2 * a;
    alert('x = ' + x);
}


