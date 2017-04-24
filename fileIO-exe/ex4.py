#!/usr/bin/env python3

'''
opens json and plots the data using pyplot
'''

from matplotlib import pyplot as plt
import json

def plotJSON(JSON):

    # open the json data and save it to variable
    with open(JSON, 'r') as fh:
        data = json.load(fh)

    # plot data in scatter plot
    for num in data["data"]:
        plt.scatter(num[0], num[1])
    
    plt.show()

if __name__ == "__main__":
    plotJSON('data.json')
