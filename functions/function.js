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
// greating with name
function fullName(firstName, lastName) {
  let message = `Hello ${firstName} ${lastName}! How are you doing?`;
  window.alert(message);
}

fullName("Sofia", "Hjerpe");
// distance converter
function converter(kilometres) {
  let miles = (kilometres * 2) / 3;
  console.log(
    "answear: " +
      kilometres +
      " kilometres is equal to " +
      miles +
      " american miles."
  );
}
converter(20);
// temperature converter
function convertTemp(celcius) {
  let farenheit = celcius * 1.8 + 32;
  console.log(celcius + "°C is equal to " + farenheit + " °F");
}
convertTemp(14);
//mean value
let numbers = [1, 5, 4, 6];

meanVal.apply(null, numbers);
function meanVal(a, b, c, d) {
}

meanVal();
