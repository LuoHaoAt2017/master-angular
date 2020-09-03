Array.from({length: 1}).map(() => {
  console.table([
    {
      x: 0,
      y: 0,
      r: 1
    },
    {
      x: 1,
      y: 1,
      r: 1
    },
    {
      x: -1,
      y: -1,
      r: 1
    },
    {
      x: 0,
      y: 1,
      r: 1
    }
  ]);
});

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

class Circle {
  #x: number = 0;
  #y: number = 0;
  #r: number = 1;

  public getArea() {
    return Math.PI * Math.pow(this.#r, 2);
  }
}

new Circle();