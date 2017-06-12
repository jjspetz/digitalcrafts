/********
* Drawing app
*********/

// globals
var mouse_down = false;
var start, end;

// line setup
ctx.strokeStyle = 'red';
ctx.lineJoin = 'round';
ctx.lineWidth = 5;

// event listeners
canvas.addEventListener('mousedown', function (event) {
  mouse_down= true;
  console.log('DOWN', event);
});

canvas.addEventListener('mouseup', function (event) {
  mouse_down= false;
  end = null;
  console.log('UP', event);
});

canvas.addEventListener('mousemove', function (event) {
  if (mouse_down) {
    console.log('MOVE', event);
    start = [event.offsetX, event.offsetY];
    if (end) {
      draw(start, end)
    }

    end = [event.offsetX, event.offsetY];
  }
});

function draw(start, end) {
  ctx.moveTo(start[0], start[1]);
  ctx.quadraticCurveTo(
    start[0], start[1],
    end[0], end[1]
  );
  ctx.stroke();
  ctx.closePath();
}
