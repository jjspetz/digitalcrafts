

import random

secret_number = random.randint(1, 10)
guess = 5

print("I am think of a number from 1 to 10.")
print("You have {} guesses left.".format(guess))
ans = int(input("What's the number? "))

while True:
    if guess <= 1 and ans != secret_number:
        print("\nNo more guesses. I win!\n")
        break
    if ans > secret_number:
        guess -= 1
        print("\n{} is too high.".format(ans))
        print("You have {} guesses left.".format(guess))
        ans = int(input("What's the number? "))
    elif ans < secret_number:
        guess -= 1
        print("\n{} is too low.".format(ans))
        print("You have {} guesses left.".format(guess))
        ans = int(input("What's the number? "))
    else:
        print("\nYes, you win!\n")
        break
