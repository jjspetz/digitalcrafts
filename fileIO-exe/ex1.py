#!/usr/bin/env python3

'''
Opens a user specified file and prints it to the screen
'''

def readAndPrint():
    file_name = input("Enter a file to print: ")

    fh = open(file_name, 'r')
    content = fh.read()
    print(content)
    fh.close()

if __name__ == "__main__":
    readAndPrint()
