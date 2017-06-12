// draws circle exercises

// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


// set canvas width and height to width and height of screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// resize canvas on screen resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  bullseye()
});


// draw a circle in center of screen
function circle(color, radius) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc((canvas.width/2), (canvas.height/2), radius, 0, Math.PI * 2, false);
  ctx.fill();
}

function bullseye() {
  circle('blue', 200);
  circle('white', 150);
  circle('yellow', 140);
  circle('white', 90);
  circle('red', 80);
}

bullseye()
