class Student {
  constructor(name, age, gender) {
    (this.name = name),
      (this.age = age),
      (this.gender = gender),
      (this.subjects = []);
  }
}
let Melvin = new Student("Melvin", 12, "male", ["music", "swedish"]);
let Maja = new Student("Maja", 14, "woman", ["math", "science"]);
let Emilia = new Student("Emilia", 15, "woman", ["art", "science"]);
let Emmanuel = new Student("Emmanuel", 14, "male", ["math", "science"]);
let Hedvig = new Student("Hedvig", 12, "woman", ["music", "spanish"]);
