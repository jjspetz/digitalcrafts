#!/usr/bin/env python3

import matplotlib.pyplot as pyplot

def f(x):
    if x % 2 == 0:
        return -1
    else:
        return 1

def plot():
    xs = list(range(-5, 5))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.bar(xs, ys)
    pyplot.show()

if __name__ == "__main__":
    plot()
