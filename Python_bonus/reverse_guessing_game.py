#!/usr/bin/env python3
# The user chooses a number in their head and the computer guess it


# starts game loop where the computer askes if its guess is correct
def game_logic():

    # initilizes count variable
    guess_count = 0

    # initilizes acceptable responses
    high = ("high", "h")
    low = ("low", "l")
    right = ("right", "r", "correct", "c", "yes")

    # chooses the next computer guess
    def choose(guesslist):
        choice = int(len(guesslist) / 2)
        return guesslist[choice]


    # prints out user instructions to the game
    print("\nWelcome to the reverse guessing game!")
    print("Think of a number between 1 and 100 but don't tell me. I will guess it")
    print("You just tell me if the guess is high, low, or right")
    dud = input("Are you ready? (press any key)")

    # build initial computer guess list
    guess_list = []
    for i in range(1,101):
        guess_list.append(i)

    # adds a break from intro to guesses on the screen
    print("\n")

    # until user enters 'right'
    while(True):
        # increases guess count
        guess_count += 1
        # calls the guess function choose and prints the formated result
        guess = choose(guess_list)
        print("Is your number {}?".format(guess))
        # ask the user if the number is correct, too high, or too low
        reply = input("(high, low, or right): ")
        reply = reply.lower()

        # checks user input for acceptable responses
        if reply not in high and reply not in low and reply not in right:
            eply = input("Enter high, low, or right: ")
            reply = reply.lower()

        # handles case where guess was too high
        if reply in high:
            guess_list = guess_list[:guess_list.index(guess)]

        # handles cases where guess was too low
        elif reply in low:
            guess_list = guess_list[guess_list.index(guess):]

        # handles cases where guess is correct
        elif reply in right:
            break

    # Exit display
    print("\nI got it and it only took me {} tries.".format(guess_count))

if __name__ == "__main__":
    game_logic()
