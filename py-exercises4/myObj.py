#!/usr/bin/env python3

'''
practice making own objects
'''

class Vehicle():
    def __init__(self, year, make, model):
        self.year = year
        self.make = make
        self.model = model

    def print_info(self):
        print("{} {} {}".format(self.year, self.make, self.model))

if __name__ == "__main__":
    a = Vehicle(1995, "Ford", "Explorer")
    a.print_info()
