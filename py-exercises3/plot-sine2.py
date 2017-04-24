#!/usr/bin/env python3

import matplotlib.pyplot as pyplot, mpld3
import math
from numpy import arange

def f(x):
    return math.sin(x)

def plot():
    xs = list(arange(-5, 5, 0.1))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.plot(xs, ys)
    mpld3.show()

if __name__ == "__main__":
    plot()
