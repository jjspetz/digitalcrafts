
# setx, sety

import turtle as t
from math import sqrt

t.speed(0)

# set up
t.up()
t.bk(300)
t.lt(90)

# add my shapes
t.addshape("trapezoid", ((0, 0), (34, 60), (86, 60), (120, 0)))
t.addshape("quadrahedrial", ((0, 0), (-39, 60), (36, 60), (70, 0)))
t.addshape("reverse_quad", ((0, 0), (-39, -60), (36, -60), (70, 0)))
t.addshape("sTri", ((0, 0), (25, 42), (50, 0)))
t.addshape("bTri", ((0,0), (35, 60), (70,0)))

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
t.color("#7BC242")
t.stamp()

# move to next local
t.seth(0) # sets the cursur heading to east
t.fd(trap_move)

# print quadrahedrial
t.color("#5B893E")
t.seth(90)
t.shape("quadrahedrial")
t.stamp()

#change heading move over and print small triangle
t.shape("sTri")
t.seth(0) # goes east
t.fd(sTri_move) # calculates distance to move
t.seth(270)
t.color("#7BC242")
t.stamp()

# move to bottom of triangle
t.seth(270)
t.fd(dist[1][1])
t.seth(180)
t.fd((sTri_move/ 2))

# print big triangle
t.color("#447764")
t.seth(90)
t.shape("bTri")
t.stamp()

# move for tilt of next triangle
t.seth(0)
t.fd(bTri_move)

# print big triangle
t.color("#1466A2")
t.seth(270)
t.shape("bTri")
t.stamp()

# move 1 big and 1/2 small triangle west and south 1 sTri_move
t.fd(sTri_move_y)
t.seth(0)
t.bk(bTri_move + sTri_move/2)

# print trapezoid
t.seth(270)
t.color("#1D8DCD")
t.shape("trapezoid")
t.stamp()

# print small triangle of same color as last
t.seth(90)
t.shape("sTri")
t.stamp()

# print bottom left quadrahedrial
t.shape("reverse_quad")
t.seth(90)
t.color("#0D6FB8")
t.stamp()

# move to next point
t.seth(0)
t.fd(quad_move + sTri_move/2)
t.seth(90)
t.fd(sTri_move_y)

# reprint blue triangle
t.color("#1466A2")
t.seth(270)
t.shape("bTri")
t.stamp()

# move up and to the left
t.seth(0)
t.fd(bTri_move/2 - sTri_move/2)
t.seth(90)
t.fd(bTri_move_y - sTri_move_y)

# print small triangle
t.color("#1F8CCD")
t.seth(90)
t.shape("sTri")
t.stamp()

# last move
t.fd(sTri_move_y)
t.seth(0)
t.fd(sTri_move/2)

# print last big triangle
t.color("#1482B3")
t.shape("bTri")
t.seth(270)
t.stamp()

t.ht() #hides final turtle
t.mainloop()
