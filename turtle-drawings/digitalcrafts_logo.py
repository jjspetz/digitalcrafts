'''
    This programs writes the Digital Crafts logo using turtle.
    Currently it needs a color adjustment
'''

import turtle as t
from math import sqrt

t.speed(0)

COLORS1 = ("#7BC242", "#5B893E", "#7BC242", "#447764", "#1466A2", "#1D8DCD",
 "#0D6FB8", "#1466A2", "#1F8CCD", "#1682B3")
COLORS2 = ("#F89F1F", "#F47820", "#F89F1F", "#C28254", "#949597", "#BCBDBF",
 "#A6AAAB", "#949597", "#A6AAAB", "#6E6D72")

def print_half(colors, size="md", factor=True):

    SIZE = {"xs":1/4, "sm":1/2, "md":1, "lg":2.5, "xl":5}

    if factor:
        f = 1 * SIZE[size]
    else:
        f = -1 * SIZE[size]

    # set up
    t.up()
    t.bk(250 * f)
    t.lt(90)
    t.fd(32 * f)

    # add my shapes
    t.addshape("trapezoid", ((0, 0), (34 * f, 60 * f), (86 * f, 60 * f), (120 * f, 0)))
    t.addshape("quadrahedrial", ((0, 0), (-39 * f, 60 * f), (36 * f, 60 * f), (70 * f, 0)))
    t.addshape("reverse_quad", ((0, 0), (-39 * f, -60 * f), (36 * f, -60 * f), (70 * f, 0)))
    t.addshape("sTri", ((0, 0), (25 * f, 42 * f), (50 * f, 0)))
    t.addshape("bTri", ((0,0), (35 * f, 60 * f), (70 * f, 0)))

    # calculate traslations
    # trapezoid
    t.shape("trapezoid")
    dist = t.get_shapepoly()
    trap_move = dist[3][0] - dist[0][0]

    # quadrahedrial
    t.shape("quadrahedrial")
    dist = t.get_shapepoly()
    quad_move = dist[3][0] - dist[0][0]

    # big triangle x-axis
    t.shape("bTri")
    dist = t.get_shapepoly()
    bTri_move = dist[2][0] - dist[0][0]
    # big triangle y-axis
    t.shape("bTri")
    dist = t.get_shapepoly()
    bTri_move_y = dist[1][1] - dist[0][1]

    # small triangle x-axis
    t.shape("sTri")
    dist = t.get_shapepoly()
    sTri_move = dist[2][0] - dist[0][0]
    # small triangle y-axis
    t.shape("sTri")
    dist = t.get_shapepoly()
    sTri_move_y = dist[1][1] - dist[0][1]
    # tanslations end

    # prints a trapezoid
    t.shape("trapezoid")
    t.color(colors[0])
    t.stamp()

    # move to next local
    t.seth(0) # sets the cursur heading to east
    t.fd(trap_move)

    # print quadrahedrial
    t.color(colors[1])
    t.seth(90)
    t.shape("quadrahedrial")
    t.stamp()

    #change heading move over and print small triangle
    t.shape("sTri")
    t.seth(0) # goes east
    t.fd(sTri_move) # calculates distance to move
    t.seth(270)
    t.color(colors[2])
    t.stamp()

    # move to bottom of triangle
    t.seth(270)
    t.fd(dist[1][1])
    t.seth(180)
    t.fd((sTri_move/ 2))

    # print big triangle
    t.color(colors[3])
    t.seth(90)
    t.shape("bTri")
    t.stamp()

    # move for tilt of next triangle
    t.seth(0)
    t.fd(bTri_move)

    # print big triangle
    t.color(colors[4])
    t.seth(270)
    t.shape("bTri")
    t.stamp()

    # move 1 big and 1/2 small triangle west and south 1 sTri_move
    t.fd(sTri_move_y)
    t.seth(0)
    t.bk(bTri_move + sTri_move/2)

    # print trapezoid
    t.seth(270)
    t.color(colors[5])
    t.shape("trapezoid")
    t.stamp()

    # print small triangle of same color as last
    t.seth(90)
    t.shape("sTri")
    t.stamp()

    # print bottom left quadrahedrial
    t.shape("reverse_quad")
    t.seth(90)
    t.color(colors[6])
    t.stamp()

    # move to next point
    t.seth(0)
    t.fd(quad_move + sTri_move/2)
    t.seth(90)
    t.fd(sTri_move_y)

    # reprint blue triangle
    t.color(colors[7])
    t.seth(270)
    t.shape("bTri")
    t.stamp()

    # move up and to the left
    t.seth(0)
    t.fd(bTri_move/2 - sTri_move/2)
    t.seth(90)
    t.fd(bTri_move_y - sTri_move_y)

    # print small triangle
    t.color(colors[8])
    t.seth(90)
    t.shape("sTri")
    t.stamp()

    # last move
    t.fd(sTri_move_y)
    t.seth(0)
    t.fd(sTri_move/2)

    # print last big triangle
    t.color(colors[9])
    t.shape("bTri")
    t.seth(270)
    t.stamp()

if __name__ == "__main__":
    print_half(COLORS1)
    t.home()
    print_half(COLORS2, factor=False)
    t.bgcolor("#223E4A")
    t.mainloop()
