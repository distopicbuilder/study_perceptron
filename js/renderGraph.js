import { perceptron } from "./neural/perceptron.js";
import { Point } from "./neural/train.js";

const height = 400, width = 400;

let points = [];

function setup() {
  createCanvas(400, 400);
  const p = new Point(height, width);
  points = p.makePoints(height, width, 1000);
}
function draw() {
  background(255);
  points.forEach(x=>x.show())
}


window.setup = setup;
window.draw = draw;