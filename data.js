
// String Method
let str = "HappyNewYear";   
let str1 = "Hello";
let str2 = "World!";
let str3 = str1.concat(" ",str2);

document.getElementById("len").innerHTML = str.length;
document.getElementById("slice").innerHTML = str.slice(-7,-4);
document.getElementById("substring").innerHTML = str.slice(5,12);
document.getElementById("substr").innerHTML = str.substr(5,3);
document.getElementById("strrep").innerHTML= str.replace("HappyNewYear","Helloworld");
document.getElementById("strup").innerHTML= str.toUpperCase();
document.getElementById("strlow").innerHTML=  str.toLowerCase();
document.getElementById("concat").innerHTML = str3;

// Array Method

const arr = ["first","second","third"];

document.getElementById("pop").innerHTML= arr.pop(); 
document.getElementById("push").innerHTML= arr.push("fourth");
document.getElementById("push").innerHTML= arr;
document.getElementById("shift").innerHTML = arr.shift();
document.getElementById("shift").innerHTML = arr;
document.getElementById("unshift").innerHTML = arr.unshift("zero");
document.getElementById("arr").innerHTML = arr;


// Data Types
let x = 16 + 6;
document.getElementById("num").innerHTML = x;

let y = 16 + 4 + "Hello";
document.getElementById("par").innerHTML = y;

//String

let  ans="He";
let  ans1="is";
let  ans2="Brilliant";
document.getElementById("str").innerHTML = ans+"&nbsp"+ans1+"&nbsp"+ans2;

//Numbers

let x1 = 12.00;
let x2 = 54;
let x3 = 1.26;
document.getElementById("Numbers").innerHTML =x1 + "<br>" + x2 + "<br>" + x3

//Boolean

let a = 5;
let b = 5;
let c = 6;
document.getElementById("boolean").innerHTML = (a == b) + "<br>" + (a == c);

//Array

const color =["Red","Blue","Violet"];
document.getElementById("Array").innerHTML = color[1] + "&" + color[0];

//object

const per = {
  firstname : "Ram",
  lastname  : "kumar",
  age       : 10,
};
document.getElementById("obj").innerHTML =
per.firstname + per.lastname + " is " + per.age + " years younger than me";
let e;
document.getElementById("undef").innerHTML = e;

//Function
let f1 = myfun(2,3); 
function myfun(a, b) {
  return a * b;
 };

document.getElementById("func").innerHTML= f1;
