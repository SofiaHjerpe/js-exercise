// 1
let fruits = ["apples", "pineapple", "kiwi"];
fruits.push("bananas", "pears", "plums");
console.log(fruits);
// 2
let randomNumbers = [1, 5, 35, 20, 22];
// for (let rn in randomNumbers) {
//   rn *= 3;
// }

//kolla sedan
console.log(randomNumbers);
// 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
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
let cars = ["volvo", "toyota", "saab"];

for (let car of cars) {
  if (car == "toyota") {
    console.log(cars[1]);
  }
}
// 6
let flowers = ["rose", "tulip", "dandelion"];
flowers.splice(-1, 1);
console.log(flowers);
// 7
let bigNumbers = [1000, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1300, 1350];
console.log(Math.max(...bigNumbers));
// 8
// let food = ["hamburgers", "pasta", "pizza"];
// let morefood = food.slice();
// console.log(morefood);

let food = ["hamburgers", "pasta", "pizza"];
let secondf = [];

for (f of food) {
  if (secondf.length < 3) {
    secondf.push(food[2]);
    secondf.push(food[1]);
    secondf.push(food[0]);
  }
}
console.log(secondf);
