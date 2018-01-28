
var ball;

var up = window.innerHeight
var right = window.innerWidth

function setup() {
  createCanvas(right, up, WEBGL);

}

function draw(){
   background(250);

    orbitControl();
    push();

    sphere(70);
    pop();
}
