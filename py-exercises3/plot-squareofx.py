#!/usr/bin/env python3

import matplotlib.pyplot as pyplot

def f(x):
    return x * x

def plot():
    xs = list(range(-100,100))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.plot(xs, ys)
    pyplot.show()

if __name__ == "__main__":
    plot()
