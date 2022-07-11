console.log("A JavaScript Class");
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}

let adam = new Person("Adam", "Bucan");
let bulent = new Person("Bulent", "Bucan");

console.log(adam.name);
console.log(adam.surname);
console.log(adam.getFullName());
