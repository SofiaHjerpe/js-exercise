// 1
var userName = window.prompt("Hello, what is your name?");
console.log("Hello " + userName);
// 2
var yearOfBirth = window.prompt("What is your year of birth?");
// 3
var dateOfToday = new Date().getFullYear();
var age = dateOfToday - yearOfBirth;
console.log(userName + " you are " + age + " years old.");
// 4
var numberOne = window.prompt("Please write a number");
var numberTwo = window.prompt("Write another number");
// 5
var addition = parseInt(numberOne) + parseInt(numberTwo);
var subtraction = numberOne - numberTwo;
console.log("addition: " + numberOne + " + " + numberTwo + " = " + addition);
console.log(
  "subtraction: " + numberOne + " - " + numberTwo + " = " + subtraction
);
console.log(
  "multiplication: " +
    numberOne +
    " * " +
    numberTwo +
    " = " +
    numberOne * numberTwo
);
console.log(
  "division: " + numberOne + " / " + numberTwo + " = " + numberOne / numberTwo
);
var newMessage = window.alert(
  "The calculations are done! You can see them in the console."
);
