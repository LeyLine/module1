//Our first function

function sayHelloWorld() {
  var whatToSay = "Hello, World!";
  console.log(whatToSay);
}

sayHelloWorld();

//Showing us how arguments make life better instead having to call the function all the time

function sayHelloMery() {
  console.log("Hello, Mery!");
}

function sayHelloJohn() {
  console.log("Hello, John!");
}

function sayHelloLucy() {
  console.log("Hello, Lucy!");
}

sayHelloMery();
// function will print: "Hello Mery!"
sayHelloJohn();
// function will print: "Hello John!"
sayHelloLucy();
// function will print: "Hello Lucy!"

//Versus

function sayHello(name) {
  console.log("Hello " + name + "!");
}

sayHello("Mery");
// name = Mery
// function will alert: "Hello Mery!"

sayHello("John");
// name = John
// function will alert: "Hello John!"

sayHello("Lucy");
// name = Lucy
// function will alert: "Hello Lucy!"

//We can also have as many arguments as we want
function sayHelloManyTimes(name, howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log("Hello " + name + "!");
  }
}
sayHelloManyTimes("Michael", 3);
// => Michael, Michael, Michael

//Creating a test
var newQuizz =
  Math.floor(Math.random() * 101) + "+" + Math.floor(Math.random() * 101);

console.log(newQuizz);

//with a function, we can event set different limit each time we call the function
function getRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function makeAQuizz(limit) {
  var generateQuizz = getRandomNumber(limit) + "+" + getRandomNumber(limit);
  return generateQuizz;
}

newQuizz = makeAQuizz(100);
newQuizz = makeAQuizz(200);
newQuizz = makeAQuizz(300);

// Now we can create as many quizzes as we want, and change the limit as many times as we want!
