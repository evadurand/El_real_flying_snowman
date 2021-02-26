//Bras
let yA = 60
let yC = 60

function setup() {
  createCanvas(200, 200);
}

function draw() {
  //Noir
  fill(0);
  ellipse(100, 150, 80, 15);
  //Blanc
  fill(255);
  circle(100, 50, 40);
  circle(100, 110, 80);
  triangle(100, 52, 100, 56, 113, 54);
  rect(80, 60, 40, 15);
  rect(80, 75, 15, 30);
  //Noir
  fill(0);
  circle(90, 48, 5);
  circle(110, 48, 5);
  //ANIMATION
  line(40, yA, 65, 92);
  line(160, yC, 135, 92);
}

function mouseClicked() {
  clear()
  if (yA === 60) {
    yA = 120;
    yC = 120;
  } else {
    yA = 60
    yC = 60
  }
}