// Blob class

function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = 64; // Radius

  this.show = function() {
    fill(255);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.update = function() {
    var vel = createVector(mouseX-width/2, mouseY-height/2);
    vel.setMag(3);
    this.vel.lerp(vel, 0.2);
    this.pos.add(vel);
  }

  this.eats = function(other) {
    var d = p5.vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r + PI * other.r * other.r;
      this.r = sqrt(sum/PI);
      return true;
    } else {
      return false;
    }
  }
}