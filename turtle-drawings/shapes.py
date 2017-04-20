#!/usr/bin/env python3

import turtle as t

t.shape("turtle")

# draws an equlateral triangle
def equilateral_triangle(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.right(60)
    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws a square
def square(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.right(90)
    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws a pentagon
def pentagon(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    t.forward(size)
    t.right(-72)
    t.forward(size)
    t.right(-72)
    t.forward(size)
    t.right(-72)
    t.forward(size)
    t.right(-72)
    t.forward(size)
    t.right(-72)

    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws a hexagon
def hexagon(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    t.forward(size)
    t.left(-60)
    t.forward(size)
    t.left(-60)
    t.forward(size)
    t.left(-60)
    t.forward(size)
    t.left(-60)
    t.forward(size)
    t.left(-60)
    t.forward(size)
    t.left(-60)
    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws an octagon
def octagon(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    t.forward(size)
    t.left(-45)
    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws a star
def star(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()
    for i in range(5):
        t.forward(size)
        t.right(144)
    if fill:
        t.end_fill()
    if wait:
        t.mainloop()

# draws a circle of "color"
def circle(size=100, color="black", fill=False, wait=False):
    t.color(color, color)
    if fill:
        t.begin_fill()

    t.circle(size)

    if fill:
        t.end_fill()

    if wait:
        t.mainloop()

if __name__ == "__main__":
    equilateral_triangle()
    square()
    pentagon()
    hexagon()
    octagon()
    star()
    circle(True)
