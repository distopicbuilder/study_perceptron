import { Perceptron } from "./neural/perceptron.js";
import { Point } from "./neural/point.js";

const height = 400, width = 400;

let points = [];

function setup() {
  createCanvas(400, 400);
  points = Point.makePoints(height, width, 1000);
}
function draw() {
  background(255);
  points.forEach(x=>x.show())
}


window.setup = setup;
window.draw = draw;