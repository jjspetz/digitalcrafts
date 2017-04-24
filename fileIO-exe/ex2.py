#!/usr/bin/env python3

'''
Opens a user specified file and lets user write to it
'''

def writeToFile():
    file_name = input("Enter a file to write to: ")

    fh = open(file_name, 'w')
    print("Write something to the file!")
    content = input()
    fh.write(content)
    fh.close()

if __name__ == "__main__":
    writeToFile()
