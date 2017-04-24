#!/usr/bin/env python3

'''
The bonus challenge exercise
This program takes a histogram of words (or letters) and returns the top
three most used words (or letters)
'''

import wordSummary as ws

def returnTop3(histogram):
    # initializing variables
    key_list = ["1st", "2nd", "3rd"]
    top3 = {}

    for i in range(3):
        maximum = max(histogram, key=histogram.get)
        top3[key_list[i]] = maximum
        histogram.pop(maximum)

    return top3

if __name__ == "__main__":
    print("Must used words are: {}".format(returnTop3(ws.histogram(ws.sys.argv[1]))))
