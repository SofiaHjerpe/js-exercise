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
let numbers = [20, 20, 20, 25];

meanVal.apply(null, numbers);
function meanVal(a, b, c, d) {
  let sum =
    parseInt(`${a}`) + parseInt(`${b}`) + parseInt(`${c}`) + parseInt(`${d}`);
  let result = sum / 4;
  console.log("Mean value is equal to: " + result);
}
// systembolaget
function ageOkCheck(age) {
  if (age <= 14) {
    console.log("Get out of here!");
  } else if (age <= 17) {
    console.log("Sorry, you are not old enough.");
  } else if (age <= 80) {
    console.log("Thank you! Welcome!");
  } else {
    console.log("I'm sorry where is your caretaker?");
  }
}
ageOkCheck(80);
// Sum
function calcS(myArray) {
  if (myArray.length <= 10) {
    let sum = myArray.reduce((p, c) => {
      return p + c;
    }, 0);
    console.log(sum);
  }
}
calcS([1, 20, 3, 4, 5, 60, 20, 523, 35, 325]);

// List a persons skills

function showPerson(person) {
  let personData =
    `${person.name} ${person.age} ${person.city}` +
    " skills: " +
    `${person.skills} `;
  console.log(personData);
}
showPerson({
  name: "Sofia Hjerpe",
  age: 24,
  city: "Stockholm",
  skills: ["Salsa", "UX", "Frontend", "Lindihop", "theater"],
});
