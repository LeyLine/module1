//If and Else Statements

var age = parseInt(prompt("Welcome to IronHack cinema. How old are you?"));

if (age <= 16) {
  console.log("You have a teenager discount");
} else if (age >= 65) {
  console.log("You have the senior citizen discount :)");
} else {
  console.log("Sorry, you have no discount :(");
}

//Lesson exercise 
var age = prompt("What language do you want?");

if (age === 'spanish') {
  console.log("Hola Mundo");
} else if (age === 'french') {
  console.log('speaking french');
} else {
  console.log("Hello World");
}

//Switch Statements
var age = prompt("What language do you want?");
var language = "";
switch (age) {
  case 'spanish':
    language = 'Hola mundo';
    break;
  case 'french':
    language = 'speaks french';
    break;
}
console.log(language);

//Loops

//While Loops
var i = 0;

//While Loop Exercise 
while (i <= 29) {
  if (i === 10) {
    console.log('ten')
  } else if (i === 20) {
    console.log('twenty')
  } else {
    console.log(i);
  }
  i = i + 1; // this is the same as i++
}