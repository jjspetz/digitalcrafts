#!/usr/bin/env python3

# This program generates a randomized stary night using python3 and turtle.
# The stars have a preference for appearing near the center of the screen and with a white color.

import turtle as t
import random

t.shape("circle")

t.bgcolor("black")

# sets a tuple of possible colors
colors = ("#ffffff", "#80dfff", "#ffffff", "#ffffff", "#ffffff", "#ffa366", "#ffffff", "#ffffff", "#ff6666", "#ffff66", "#ffffff", "#ffffff")

# set speed to maximum
t.speed(0)
# hide turtle to increase speed of draw
t.ht()

# starts random star generation with preference towards the middle
for i in range(450):
    t.up() # lifts the pen

    # checks if the curser has wandered too far from the middle
    if t.pos()[0] > 350 or  t.pos()[0] < -350 or t.pos()[1] > 335 or t.pos()[1] < -335:
        t.home()

    t.right(random.randint(-360, 360))

    # resets move distance for each iteration
    move = 0
    # checks if move distance is too small so the random move is a nice distance
    while move < 45 and move > -45:
        move = random.randint(-120, 120)
    t.forward(move)
    t.down() # puts the pen down to draw the dot

    # randomizes the color of the star
    t.pencolor(colors[random.randint(0,11)])

    # randomizes the size of the star
    t.dot(random.randint(2,5))


t.mainloop()
