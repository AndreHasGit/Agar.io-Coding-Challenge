// Blob class

function Blob(x, y, radius, colour) {
  var colour = random(255), colour2 = random(255), colour3 = random(255);
  this.pos = createVector(x, y);
  this.radius = radius;
  this.vel = createVector(0, 0);

  this.show = function() {
    if (this.radius == 16) {
      fill(colour, colour2, colour3);
    } else {
      fill(225);
    }
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
  }

  this.update = function() {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.radius + other.radius) {
      var sum = PI * this.radius * this.radius + PI *  other.radius * other.radius;
      this.radius = sqrt(sum / PI);
      return true;
    } else {
      return false;
    }
  }
}