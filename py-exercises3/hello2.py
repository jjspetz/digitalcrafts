#!/usr/bin/env python3

# This is a simple function that says hello using a command-line argument

import argparse

# formats the arguments for argparse
parser = argparse.ArgumentParser()
# requires at least one string as name
parser.add_argument('username', metavar='name', type=str, nargs='*',
                    help="Enter a name so the computer can say hello")


def hello(name):
    print("Hello, {}!".format(name))

if __name__ == "__main__":
    args = parser.parse_args()
    hello(' '.join(args.username))
