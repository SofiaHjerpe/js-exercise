// 1
const fruits = [];
fruits.push("apples", "pineapple", "kiwi", "bananas", "pears", "plums");
console.log(fruits);
// 2
const randomNumbers = [1, 5, 35, 20, 22];
for (var i = 0; i < randomNumbers.length; i++) {
  randomNumbers[i] = randomNumbers[i] * 3;
}
console.log(randomNumbers);
// 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let higherNumbers = [];

for (let n of numbers) {
  if (n > 5) {
    higherNumbers.push(n);
  }
}
console.log(higherNumbers);
// 4
console.log([1, 5, 3, 4].reduce((a, b) => a + b, 0));
//  5
const cars = ["volvo", "toyota", "saab"];
const findCar = cars.find((car) => car === "toyota");
console.log(findCar);

// 6
const flowers = ["rose", "tulip", "dandelion"];
flowers.splice(-1, 1);
console.log(flowers);
// 7
const bigNumbers = [1000, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1300, 1350];
console.log(Math.max(...bigNumbers));
// 8
const food = ["hamburgers", "pasta", "pizza"];
const secondf = [];

for (f of food) {
  if (secondf.length < 3) {
    secondf.push(f);
  }
}
console.log(secondf);
// 9
const fruit = ["banana", "apple", "plum", "pear", "pineapple"];
while (fruit.length > 0) {
  fruit.pop();
}
console.log(fruit);
