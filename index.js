// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides; // Array of side lengths
  }

  get countSides() {
    return this.sides.length; // Returns the number of sides
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0); // Calculates the sum of sides
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    if (sides.length !== 3) {
      throw new Error("A triangle must have exactly 3 sides.");
    }
    super(sides);
  }

  get isValid() {
    const [a, b, c] = this.sides;
    return (a + b > c) && (a + c > b) && (b + c > a); // Triangle inequality check
  }
}

class Square extends Polygon {
  constructor(sides) {
    if (sides.length !== 4) {
      throw new Error("A square must have exactly 4 sides.");
    }
    super(sides);
  }

  get isValid() {
    return this.sides.every(side => side === this.sides[0]); // Check if all sides are equal
  }

  get area() {
    return this.sides[0] ** 2; // Calculate area (side^2)
  }
}

// Example usage:
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.countSides); // Output: 3
console.log(triangle.perimeter);   // Output: 12
console.log(triangle.isValid);      // Output: true

const square = new Square([4, 4, 4, 4]);
console.log(square.countSides);     // Output: 4
console.log(square.perimeter);       // Output: 16
console.log(square.isValid);         // Output: true
console.log(square.area);            // Output: 16