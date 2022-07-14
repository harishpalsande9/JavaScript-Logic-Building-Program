console.log("JavaScript classes are special functions");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  writeAreaToConsole() {
    console.log(this.radius ** 2 * Math.PI);
  }
}

console.log(typeof Circle);

const circle = new Circle(3);
circle.writeAreaToConsole();
