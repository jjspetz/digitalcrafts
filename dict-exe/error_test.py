#!/usr/bin/env python3

def catch_error():
    while 1:
        try:
            x = int(input("Enter an integer: "))

        except ValueError:
            print("Enter an integer!")

        except x == 3:
            raise myError("This is not an integer!")

        else:
            x += 13

if __name__ == "__main__":
    catch_error()
