window.alert("Hello! How are you doing?");
// 1
let number = window.prompt("Please write a number");
let chosenNumber = parseInt(number);
// 2
let num = window.prompt("Write another number");
let anotherNum = parseInt(num);
// 3
let countingMethod = window.prompt(
  "Chose counting method. You can choose between either +, -, * and /. "
);
// 4
// 5
if (countingMethod == "+") {
  window.alert("sum: " + Number(chosenNumber + anotherNum));
} else if (countingMethod == "-") {
  window.alert("differens: " + chosenNumber - anotherNum);
} else if (countingMethod == "*") {
  window.alert("produkt: " + chosenNumber * anotherNum);
} else if (countingMethod == "/") {
  window.alert("kvot: " + chosenNumber / anotherNum);
} else {
  window.alert("Error!! You have to write an existing method. Please write either +, -, * or /");
}
//6
window.alert("Thank you for using this calculator!");
