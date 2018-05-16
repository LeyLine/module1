//Learning how to console.log
console.log("My name is Bob, and I'm writing JavaScript");
//My name is Bob, and I'm writing JavaScript

//Initializing VAriables
var name = "Ironhacker";
var age;
age = 45;
console.log(name);
//Ironhacker
console.log(age);
//45

//Grabing the character by its index number
var greeting = "Hello";
console.log(greeting[0]);
//H
console.log(greeting[3]);
//l
console.log(greeting[9]);
//undefined
console.log(greeting[-2]);
//undefined

//Finding the index of a character by using indexOf("")
var jel = "My favorite dessert is jello";
console.log(jel.indexOf("j"));

//Learning how to use repeat
console.log("$".repeat(3));
//$$$
console.log("la".repeat(10));
//lalalalalalalalalala

//Learning how to use includes
console.log("dog".includes("og"));
//true
console.log("Dog".includes("do"));
//false
console.log("Hippopotamus".includes("pop"));
//true
// We can pass an optional second argument to tell includes where to start
console.log("Hippopotamus".includes("Hip", 1));
//false
