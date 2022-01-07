function Rectangle(a, b) {
  const square = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };

  return console.log(square);
}

Rectangle(10, 20);
