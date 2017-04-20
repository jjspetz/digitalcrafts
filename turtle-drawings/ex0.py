#!/usr/bin/env python3

from turtle import *

# draws a square
def square():
    forward(100)
    right(90)
    forward(100)
    right(90)
    forward(100)
    right(90)
    forward(100)
    right(90)

    mainloop()

# draws a square a bit off center
def off_center_square():
    # move into position
    up()
    forward(50)
    left(90)
    forward(50)
    left(90)

    down()

    # draws square
    square()

# draws a circle of "color"
def draw_circle(color, radius):
    pencolor(color)
    width(10)
    circle(radius)

    mainloop()

# draws a star
def draw_star():
    for i in range(5):
        forward(100)
        right(144)

    mainloop()

if __name__ == "__main__":
    draw_star()
