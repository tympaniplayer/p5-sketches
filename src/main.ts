import p5 from "p5";
import { createSketch } from "./p5-util/sketch";
import { setup } from "./setup";
import { draw } from "./draw";
import { Walker } from "./Walker";

const s = (p: p5) => {
  const width = 640;
  const height = 250;
  const walker = new Walker(width, height);

  p.setup = () => {
    p.createCanvas(width, height);
  };

  p.draw = () => {
    walker.step(p);
    walker.show(p);
  };
};

new p5(s);
