#!/usr/bin/env python3

'''
Opens a user specified file and prints the letter and word histogram of it
Current;y won't work without putting letterSummary and wordSummary into the
same folder
'''

import letterSummary as ls
import wordSummary as ws

PUNCTUATION = ".!,?;:''\"\"/\\"

def dual_histogram():
    file_name = input("Enter a file to check its histogram: ")

    with open(file_name, 'r') as fh:
        content = fh.read()
        content = content.strip()
        for thing in PUNCTUATION:
            content = content.replace(thing, "")

    # histogramifies the file
    print(ws.histogram(content))
    print(ls.histogram(content))

if __name__ == "__main__":
    dual_histogram()
