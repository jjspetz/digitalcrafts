#!/usr/bin/env python3

import matplotlib.pyplot as pyplot

def f(x):
    return x + 1

def plot():
    xs = list(range(-3,3))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.plot(xs, ys)
    pyplot.show()

if __name__ == "__main__":
    plot()
