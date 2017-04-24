#!/usr/bin/env python3

import matplotlib.pyplot as pyplot, mpld3

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

    graph = pyplot.bar(xs, ys)
    mpld3.fig_to_html(graph)

if __name__ == "__main__":
    plot()
