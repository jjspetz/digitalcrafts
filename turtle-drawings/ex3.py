#!usr/bin/env python3

import shapes as s

# use all of shapes' functions to print everything ontop of each other
# all parameters have defaults
# paramater order size, "color", fill, wait
s.equilateral_triangle(200, "red", True)
s.square(200, "black")
s.pentagon(120, "purple", True)
s.hexagon(120)
s.octagon(color="blue")
s.star(300, "yellow")
s.circle(wait=True)
