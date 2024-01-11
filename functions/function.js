// Greeting
function helloWorld() {
  window.alert("Hello there my friend!");
}
helloWorld();
// Greeting with name
function writeName(userName) {
  window.alert("Hello there my friend! You must be " + userName);
}
writeName("Sofia");
// addition
function addition(numOne, numTwo) {
  var sum = parseInt(numOne) + parseInt(numTwo);
  console.log("sum: " + sum);
}
addition(20, 4);
// division
function division(numOne, numTwo) {
  if (numTwo === 0) {
    console.log("Error!You can not divide by zero");
  } else {
    quotient = numOne / numTwo;
    console.log("quotient: " + quotient);
  }
}
division(49, 7);
division(49, 0);
// area
function box(length, width) {
  var area = length * width + "cm^2";
  console.log("The area of the box is: " + area);
}
box(20, 30);

