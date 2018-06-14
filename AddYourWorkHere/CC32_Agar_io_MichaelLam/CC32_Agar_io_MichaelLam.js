// Michael Lam
// June 13, 2018
// Coding Challenge 32: Agar.io

// Changes
// - Random colours generate for each blob, but the user's blob remains the same colour
// - Increased duration of initial zoom animation
// - Decreased initial blob size,

// Declaring variables
var blob, zoom = 10, blobs = [];

// Initial setup
function setup() {
  createCanvas(600, 600);
  blob = new Blob(0, 0, 17);
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    blobs[i] = new Blob(x, y, 16);
  }
}

// Runs code continuously
function draw() {
  background(0);
  translate(width/2, height/2);
  var newzoom = 64 / blob.radius;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  for (var i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }
  blob.show();
  blob.update();
}