window.onload = function() {
  var canvas = document.getElementById('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

  var mouse = {
    x: undefined,
    y: undefined,
    radius: 5,
    mass: 100000000
  }

  window.addEventListener('mousedown',
      function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

  });

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
  });

  colorPalate = [
    '#636153',
    '#B3A49D',
    '#E9F8F5',
    '#919EB7',
    '#050702'
  ]

  // defines Circle object
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.area = Math.PI * Math.pow(radius, 2);
    this.density = 25;
    this.mass = this.area * this.density;
    this.color = colorPalate[Math.floor(Math.random()*colorPalate.length)];

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    this.update = function() {
      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      // listens for mouse and produces 'gravity' at mouse
      this.diffX = mouse.x - this.x;
      this.diffY = mouse.y - this.y;
      this.distance = Math.sqrt(Math.pow(this.diffX, 2) + Math.pow(this.diffY, 2));
      if (this.distance) {
        if (mouse.x > this.x) {
          this.dx += (.0000000000667 * this.mass * mouse.mass) / Math.pow(this.distance, 2);
        }
        if (mouse.x < this.x) {
          this.dx -= (.0000000000667 * this.mass * mouse.mass) / Math.pow(this.distance, 2);
        }
        if (mouse.y > this.y) {
          this.dy += (.0000000000667 * this.mass * mouse.mass) / Math.pow(this.distance, 2);
        }
        if (mouse.y < this.y) {
          this.dy -= (.0000000000667 * this.mass * mouse.mass) / Math.pow(this.distance, 2);
        }
        if (this.distance < mouse.radius) {
          mouse.mass += this.mass;
          mouse.radius += 1;
          this.distance = 0;
          this.x = 0;
          this.y = 0;
          this.radius = 0;
        }
      }
      this.draw();
    };
  }
  // creates Circle objects
  var circleArray = [];
  // creates the initial circles on load and resize
  function init() {
    circleArray = [];
    for (var i = 0; i < 120; i++) {
      var radius = Math.random() * 15 + 5; // creates radius between 5 and 20
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 2; // creates change of x from -1 to 1
      var dy = (Math.random() - 0.5) * 2; // creates change of y from -1 to 1

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }
  // animates the things on the canvas
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // mouse pointer
     ctx.beginPath();
     ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2, true);
     ctx.fillStyle = 'red';
     ctx.fill();

    for(var i=0; i<circleArray.length; i++) {
      circleArray[i].update();
  }
  }

  // what is called on load
  init();
  animate();

}
