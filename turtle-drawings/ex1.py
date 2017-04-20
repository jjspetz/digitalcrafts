#!/usr/bin/env python3

from turtle import *

# draws an equlateral triangle
def equlateral_triangle():
    forward(120)
    left(120)
    forward(120)
    left(120)
    forward(120)

    mainloop()

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

# draws a pentagon
def pentagon():
    forward(100)
    right(-72)
    forward(100)
    right(-72)
    forward(100)
    right(-72)
    forward(100)
    right(-72)
    forward(100)
    right(-72)

    mainloop()

# draws an octagon
def octagon():
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)
    forward(100)
    left(-45)

    mainloop()

# draws a star
def draw_star():
    for i in range(5):
        forward(100)
        right(144)

    mainloop()

# draws a circle of "color"
def draw_circle():
    pencolor("red")
    width(10)
    circle(120)

    mainloop()

if __name__ == "__main__":
    octagon()
