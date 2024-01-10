// 1
const numbers = [2, 6, 12, 7, 22, 35];
const num = numbers[0];
console.log(num);
// 2
const lastNum = numbers[5];
console.log(lastNum);
// 3
const forthNum = numbers[3];
console.log(forthNum);
// 4
const secNum = numbers[1];
const fifthNum = numbers[4];
const anotherArray = [secNum, fifthNum];
console.log(anotherArray);
// 5
const arrayLength = numbers.length;
console.log(arrayLength);
// 6
numbers.push(22);
const seventhNum = numbers[6];
console.log(seventhNum);
//It represent the 6th element in the array.
// 7
numbers.unshift(23);
console.log(numbers[0]);
//It represents the first item in the array, every item in array moves forward one step;
// 8
numbers.splice(-1, 1);
console.log(numbers[7]);
// 9
numbers.shift(1);
console.log(numbers);
// 10
console.log(numbers);
