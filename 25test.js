console.log("classes are templates for making objects");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

console.log(typeof Circle);

const circle = new Circle(3);
console.log(typeof circle);

let area = circle.radius ** 2 * Math.PI;
console.log(area);
console.log(typeof area);
