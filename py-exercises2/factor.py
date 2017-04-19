# finds factors of a user inputed numbers and prints them out in a list
#
# Known Issues:
# 1. Does not check if user entered a numbers

# makes list for print
mylist = []

# gets user inputed positive integer
number = int(input("Enter a positive integer: "))

for i in range(number,0, -1):
    if number % i == 0:
        mylist.append(i)

# prints the list in revesed order for better UI
print(list(reversed(mylist)))
