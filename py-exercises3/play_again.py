#!/usr/bin/env python3

def play_again():
    # sets tuples for acceptable answers for yes and no
    yes = ("Y", "y", "yes", "Yes", "YES", "OK", "okay")
    no = ("N", "n", "no", "No", "NO", "nope", "Nope", "NOPE")

    reply = input ("Do you want to play again? (y or n): ")
    if reply in yes:
        return True
    elif reply in no:
        return False
    else:
        print("Invalid input")
        reply = input ("Do you want to play again? (y or n): ")

if __name__ == "__main__":
    play_again()
