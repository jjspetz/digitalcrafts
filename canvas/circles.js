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
  circle();
  insideCircle();
});


// draw a circle in center of screen
function circle() {
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.arc((canvas.width/2), (canvas.height/2), 50, 0, Math.PI * 2, false);
  ctx.fill();
}

// draws a second inner circle;
function insideCircle() {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc((canvas.width/2), (canvas.height/2), 25, 0, Math.PI * 2, false);
  ctx.fill();
}

circle();
insideCircle();
