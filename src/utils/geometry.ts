;(function(global: any) {
  // 接口上声明方法无法携带public ???

  interface Geometry {
    getArea(): number;
  }

  class Circle implements Geometry {
    private x: number = 0;
    private y: number = 0;
    private r: number = 1;

    constructor();
    constructor(x: number, y: number, z: number);
    constructor(x?: number, y?: number, r?: number) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    public getArea():number {
      return Math.PI * Math.pow(this.r, 2);
    }
  }

  class Triangle implements Geometry {
    private width: number = 0;
    private height: number = 0;

    Triangle();
    Triangle(width: number, height: number);
    Triangle(width?: number, height?: number) {
      this.width = width;
      this.height = height;
    }

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const token = 'xyz';
  global['token'] = token;
  global['Circle'] = Circle;
  global['Triangle'] = Triangle;
})(window);