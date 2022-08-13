export class Point {
  x = 0;
  y = 0;
  label = 0;

  constructor(height, width) {
    this.x = random(height);
    this.y = random(width);
    this.label = this.x > this.y ? 1 : -1;
  }

  show() {
    stroke(0);
    fill(this.label == 1 ? 255 : 0);
    ellipse(this.x, this.y, 1, 1);
  }

  makePoints(height, width, quantity) {
    let points = [];
    for (let i = 0; i < quantity; i++) {
      points[i] = new Point(height, width);
    }
    return points;
  }
}
