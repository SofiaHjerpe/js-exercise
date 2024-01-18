// ### Create an Object:

const person = {
  name: "Sofia",
  age: 24,
  city: "Stockholm",
};
// ### Access Object Properties:
console.log("Sofia Hjerpe: " + person.name + " " + person.age + " " + person.city);

// ### Modify Object Properties:
person.age = 25;
person.email = "sofia.hjerpe@yahoo.com";
console.log(person);

// ### Object with Methods:
const car = {
  make: "Volvo",
  model: "V70",
  details: function () {
    console.log("year = 2024, color = red");
  },
};

// ### Loop through Object Properties:
for (let p in person) {
  console.log(person[p]);
}

// ### Object with Nested Properties:
const person1 = {
  name: "Sofia",
  address: {
    streat: "Mellanbergsvägen",
    number: 64,
    zipcode: "146 52",
  },
};

// Create an object representing a student with nested properties for subjects and grades.
const student = {
  name: "Sofia",
  subjects: {
    art: "art",

    science: "science",
    grades: {
      gradeArt: "A",
      gradeScience: "B",
    },
  },
};

// ### Modify Nested Object Property:

person1.address.number = "26A";
person1.address.streat = "Bellmansgatan";
console.log(person1);
// Modify the science grade of the student from the previous exercise.
const studentGrade = (student.subjects.grades.gradeScience = "A");
console.log(studentGrade);

// ### Array of Objects:
// Create an array of objects representing different books with properties like title and author.
const books = [
  {
    title: "Harry P",
    author: "JK Rowling",
  },
  {
    title: "Twilight",
    author: "Stephanie Meyer",
  },
];

// ### Loop through Array of Objects:
// Loop through the books array from the previous exercise and print the title and author of each book.
for (let book of books) {
  console.log(book.title + " " + book.author);
}
