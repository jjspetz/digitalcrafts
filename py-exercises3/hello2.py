#!/usr/bin/env python3

# This is a simple function that says hello using a command-line argument

import sys

def hello(name):
    print("Hello, {}!".format(name))

if __name__ == "__main__":
    hello(sys.argv[1])
