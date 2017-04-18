'''
builds an infinite loop
ask the user if they want a single coin
if they answer 'yes' or 'y' they get one and see thier total
an answer of 'no' or 'n' exits the loop
other answers throw an error message
'''

ans = ""
coins = 0

# initial setup
print("You have {} coins".format(coins))
ans = input("Do you want a coin? ")

while ans.lower() != 'no' and ans.lower() != 'n':
    if ans.lower() == 'yes' or ans.lower() == 'y':
        coins += 1
        print("You have {} coins".format(coins))
        ans = input("Do you want another? ")
    else:
        ans = input("Enter yes or no: ")

print("Bye")
