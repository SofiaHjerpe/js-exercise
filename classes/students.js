export default class Student {
  constructor(name, age, gender) {
    (this.name = name),
      (this.age = age),
      (this.gender = gender),
      (this.subjects = []);
  }
}
export let melvin = new Student("melvin", 12, "male", ["music", "swedish"]);
export let maja = new Student("maja", 14, "woman", ["math", "science"]);
export let emilia = new Student("emilia", 15, "woman", ["art", "science"]);
export let emmanuel = new Student("emmanuel", 14, "male", ["math", "science"]);
export let hedvig = new Student("hedvig", 12, "woman", ["music", "spanish"]);
export let students = {
  melvin: melvin,
  maja: maja,
  emilia: emilia,
  emmanuel: emmanuel,
  hedvig: hedvig,
};
