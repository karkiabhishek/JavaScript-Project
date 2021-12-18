// 1. Ways to print in JavaScript
// console.log("Hello World!");
// alert("This is an alert.");
// document.write("This is document write.");


// 2. JavaScript console API
//console.log("Hello World!");
// console.warn("This is a warning!");
// console.error("This is an error.");


// 3. JavaScript Variables - Containers to store data values.
// Numbers
// var number1 = 10;
// var number2 = 20;
// console.log(number1 + number2);

// Strings
// var str1 = "This is a string.";
// var str2 = "This is second string.";

// Objects
// var marks = {
//     Mark: 70,
//     Abhishek: 98,
//     Harry: 75
// }
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// Undefined and Null
// var firstName = undefined;
// var lastName = null;
// console.log(firstName, lastName);

// /*At a very high level, there are two types of data types in Java
// script.
// 1. Primitive data type: undefined, null, number, string, boolean, symbol
// 2. Reference data type: arrays and objects
// */

// Array
// var arr = ["Abhishek", 001, "Banasthali"]
// console.log(arr);

//Operators
// 1. Arithmetic: +, -, *, /
// 2. Assignment: +=, -=, *=, /=
// 3. Comparision: ==, >=, <=, >, <
// 4. Logical: &&, ||, !

// Function
// function avg(a, b){
//     return (a + b)/2;
// }
// c = avg(4, 6);
// console.log(c);

// Conditionals in JavaScript
// var age = 34;
// if (age>18){
//     console.log('You can drink.');
// }
// else{
//     console.log('You cannot drink.');
// }

// Loops in JavaScript

// 1. For loop

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// for(var i = 0; i<arr.length;i++){
    //    if(i==3){
    //        break;
    //        continue;
    //    }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// 2. While loop

// const a = 2;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// 3. Do while

// let arr = [1, 2, 3, 4, 5];
// let j = 0;
// do{
//     console.log(arr[j]);
//     j++;
// } while(j< arr.length);

// Array Methods

// let newArray = ["Mac", 6, null, true];
// console.log(newArray.length, newArray);
// newArray.pop();
// newArray.push("Hello");
// newArray.shift();
// console.log(newArray);
// const newLen = newArray.unshift("World");
// console.log(newLen);
// console.log(newArray);

// String Methods in JavaScript

// let myString = "I am an space enthusiast.";
// console.log(myString.length);
// console.log(myString.indexOf("am"));

// console.log(myString.slice(2,7));
// console.log(myString.replace("enthusiast", "lover"));

//Dates

// let myDate = new Date;
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());

//DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);  

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);  
// elemClass[0].style.background = 'yellow';

//Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);

//Events in JavaScript

// function clicked(){
//     console.log("The buttton was clicked.");
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>"
//     console.log("Clicked on container.");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse over.");
// })

// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>"
//     console.log("Mouse up when clicked on container.");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>"
//     console.log("Mouse down when clicked on container.");
// })

// Arrow Functions

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// sum = (a,b) =>{
//     return a+b;
// }
// console.log(sum(4,5));

// SetTimeout and setinterval

// login = () =>{
//     console.log("I am logged in.");
// }
// setTimeout(login, 2000);
// setInterval(login, 2000);
// clr = setInterval(login, 2000); //Use clearTimeout(clr) to cancel setInterval/setTimeout. 

// localStorage in JavaScript

// localStorage.setItem('name', 'harry');
// localStorage
// localStorage.getItem('name');
// localStorage.clear();

//JSON

// obj = {name: "Harry", age: 25}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Spiderman", "age":25}`);
// console.log(parsed);

// Template literals - Backticks ``

// a=5;
// console.log(`The number is ${a}.`);