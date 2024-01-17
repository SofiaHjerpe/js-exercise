//1
let age = 24;
console.log("This is my age..." + age);
//2
let num = 21;
var secNum = 22;
const thirdNum = 24;
console.log(
  num +
    " let: Let is a way of declaring a variable. If you use let within a scope you have to ´call it out´from the scope. " +
    secNum +
    " var: Var is simullar to let exept you don't have to `call it out` from a scope, it will work anyways." +
    thirdNum +
    " const: Const is also simular to let and var. The only difference with const is that it can not be changed, if it is a string, num or boolean value."
);
// 3
let number = 25;
let firstName = "Sofia";
let boolean = true;
console.log("datatype is Number: " + number);
console.log("datatype is String: " + firstName);
console.log("datatype is Boolean: " + boolean);
// 4
const name = "Sofia";
//name = "Sara"; Gets a Typeerror because of assignment to constant variable
console.log(name);
//5
// 6
// We should use const because a constant value can  not be changed. The value of our string or object would in this case not be changed and therefore we should use const instead of let.
// 7
const number1 = 3;
const number2 = 5;
const result2 = number1 * number2;
console.log(result2);
// 8
const result1 = number1 - number2;
//see 'result2'
const result3 = number1 / number2;
console.log("difference = " + result1);
console.log("product = " + result2);
console.log("quotient = " + result3);
// 9
let a = 3;
a += 5;
console.log(a);
// 10
// 9
a = 10;
a = a - 4;
a = 7;
a = a + 2;
console.log(a);
// 11