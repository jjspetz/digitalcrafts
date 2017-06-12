// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


// set canvas width and height to width and height of screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// draw rectangle in center of screen
ctx.fillStyle = 'red';
ctx.fillRect((canvas.width/2 - 50), (canvas.height/2 - 100), 100, 200);
