// draws 2 rectangles next to each other

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
  draw();
});


// draw rectangle in center of screen
function draw() {
  ctx.fillStyle = 'red';
  ctx.fillRect((canvas.width/2 - 100), (canvas.height/2 - 50), 200, 100);
  ctx.fillStyle = 'blue';
  ctx.fillRect((canvas.width/2 - 100), (canvas.height/2 + 50), 200, 100);
}

draw();
