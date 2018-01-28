
var balls = [];

var grav = 1;

var up = window.innerHeight
var right = window.innerWidth

function setup() {
  createCanvas(right, up, WEBGL);
  balls.push(new Ball());

}

function draw(){
   background(250);

    orbitControl();
    for (ball of balls) {
    ball.show();
    ball.update();

  }
}
