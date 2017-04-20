#!/usr/bin/env python3

import matplotlib.pyplot as pyplot
import math

def f(x):
    return math.sin(x)

def plot():
    xs = list(range(-5, 5))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.plot(xs, ys)
    pyplot.show()

if __name__ == "__main__":
    plot()
