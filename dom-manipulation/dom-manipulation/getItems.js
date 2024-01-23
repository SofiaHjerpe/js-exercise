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
    width: width
}
console.log(imageWidth);

