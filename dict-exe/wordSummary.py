#!/usr/bin/env python3

'''
Takes a paragraph as an input and returns a dictionary of the word count
'''

import sys

def histogram(스트링):
    # create return dictionary and word string
    histo_dict = {}

    # split the paragraph into a list of words
    words = 스트링.lower().split(" ")

    for word in words:
        try:
            histo_dict[word] += 1
        except KeyError:
            histo_dict[word] = 1

    return histo_dict

if __name__ == "__main__":
    print(histogram(sys.argv[1]))
