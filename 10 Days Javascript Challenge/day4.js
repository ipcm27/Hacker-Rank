class Polygon {
  constructor(sides = new Array()) {
    this.sides = sides;
  }

  perimeter() {
    let sidesSum = 0;
    this.sides.map((side) => {
      sidesSum += side;
    });
    return sidesSum;
  }
}

myXYZ = [3, 3, 3, 3];

quadrado = new Polygon(myXYZ);

quadrado.perimeter();
