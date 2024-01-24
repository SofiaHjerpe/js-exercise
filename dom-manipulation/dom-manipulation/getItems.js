// 1
let recipeN = document.getElementById("recipe-name");
console.log(recipeN);
//2
let tagName = document.getElementsByTagName("h1")[0].tagName;
console.log(tagName);
// 3
const description = document.querySelector(".description");
const fontSizeFind = window.getComputedStyle(description);
console.log(fontSizeFind.fontSize);
// 4
const image = document.querySelector(".image-container img");
console.log(image.getAttribute("alt"));
// 5
let url = image.baseURI;
let height = image.scrollHeight;
let width = image.scrollWidth;
const imageWidth = {
  url: url,
  height: height,
  width: width,
};
console.log(imageWidth);
// 1
const ingredientsFirstList = document.querySelectorAll(".ingredients-list-bottom li");
const ingredientsSecondList = document.querySelectorAll(".ingredients-list-paste li");
const ingredients = ingredientsFirstList.length + ingredientsSecondList.length;
console.log("Nr of ingredients: " + ingredients);
// 2
console.log(ingredientsSecondList[3]);
// 3
const instructions = document.querySelectorAll(".instructions-list li");
const arrayOfInstuctions = [
  {
    order: 1,
    text: instructions[0].innerText,
  },
  {
    order: 2,
    text: instructions[1].innerText,
  },
  {
    order: 3,
    text: instructions[2].innerText,
  },
  {
    order: 4,
    text: instructions[3].innerText,
  },
  {
    order: 5,
    text: instructions[4].innerText,
  },
  {
    order: 6,
    text: instructions[5].innerText,
  },
  {
    order: 7,
    text: instructions[6].innerText,
  },
];
arrayOfInstuctions.forEach(function (instruction) {
  console.log(instruction.text);
});
