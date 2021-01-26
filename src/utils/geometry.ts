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
    constructor(x: number, y: number, r: number);
    constructor(x?: number, y?: number, r?: number) {
      this.x = x || 0;
      this.y = y || 0;
      this.r = r || 0;
    }

    public getArea():number {
      return Math.PI * Math.pow(this.r, 2);
    }

    public getPosition() {
      return {
        x: this.x,
        y: this.y
      }
    }
  }

  class Triangle implements Geometry {
    private width: number = 0;
    private height: number = 0;

    Triangle();
    Triangle(width: number, height: number);
    Triangle(width?: number, height?: number) {
      this.width = width || 0;
      this.height = height || 0;
    }

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const token = 'xyz';
  global['token'] = token;
  global['Circle'] = Circle;
  global['Triangle'] = Triangle;
})(globalThis);