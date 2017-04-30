this.update = function(other) {
  this.x += this.dx;
  this.y += this.dy;

  // interactivity
  // produces gravity for all objects
  for (var i=0; i<other.length; i++) {
      this.diffX = other[i].x - this.x;
      this.diffY = other[i].y - this.y;
      this.distance = Math.sqrt(Math.pow(this.diffX, 2) + Math.pow(this.diffY, 2));
      if (this.distance) {
        if (other[i].x > this.x) {
          this.dx += (.0000000000667 * this.mass * other[i].mass) / Math.pow(this.distance, 2);
        }
        if (other[i].x < this.x) {
          this.dx -= (.0000000000667 * this.mass * other[i].mass) / Math.pow(this.distance, 2);
        }
        if (other[i].y > this.y) {
          this.dy += (.0000000000667 * this.mass * other[i].mass) / Math.pow(this.distance, 2);
        }
        if (other[i].y < this.y) {
          this.dy -= (.0000000000667 * this.mass * other[i].mass) / Math.pow(this.distance, 2);
        }
        if (this.distance < this.radius) {
          this.dx = 0;
          this.dy = 0;
          this.radius = 0;
          other[i].mass += this.mass;
          other[i].radius += 1;
        }
      }}
  this.draw();
};
