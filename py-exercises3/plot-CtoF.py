#!/usr/bin/env python3

import matplotlib.pyplot as pyplot

def f(c):
    return c * 9 / 5 + 32

def plot():
    xs = list(range(-10, 40))
    ys = []
    for x in xs:
        ys.append(f(x))

    pyplot.plot(xs, ys)
    pyplot.xlabel("Celsius")
    pyplot.ylabel("Fahrenheit")
    pyplot.show()

if __name__ == "__main__":
    plot()
