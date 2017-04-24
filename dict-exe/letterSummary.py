#!/usr/bin/env python3

'''
Takes a word as an input and returns a dictionary of the letter count
'''

import sys

def histogram(스트링):
    # create return dictionary
    histo_dict = {}

    # loop through the string
    for char in 스트링:
        try:
            histo_dict[char] += 1
        except KeyError:
            histo_dict[char] = 1


    return histo_dict

if __name__ == "__main__":
    print(histogram(sys.argv[1]))
