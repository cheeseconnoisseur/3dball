function Ball(){
  this.pos = createVector(0 , 0 , 0);
  this.r = random(60,120)
  this.vel = createVector(0, 5, 1);
  this.acc = createVector(0 ,0 ,0);

  this.update = function(){
      this.acc = 0.2;
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }


    this.show = function() {

    fill(0);
    sphere(this.pos.x);

  }
}
