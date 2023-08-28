import type p5 from "p5";

export class Walker {
  x: number;
  y: number;
  constructor(width: number, height: number) {
    this.x = width / 2;
    this.y = height / 2;
  }

  show(p5: p5): void {
    p5.stroke(0);
    p5.point(this.x, this.y);
  }

  step(p5: p5): void {
    const xstep = p5.random(-1, 1);
    const ystep = p5.random(-1, 1);

    this.x += xstep;
    this.y += ystep;
  }
}
