'''
This is a madlibs style python3 program written to practice using input and print
'''

madlib = "{name}'s favorite food is {adjective} {food}, because {pronoun} is from {country}."

print("Welcome to Python3 Madlibs")
name = input("Enter a name: ")
adj = input("Enter an adjective: ")
food = input("Enter a food: ")
pronoun = input("Enter a pronoun: ")
country = input("Enter a country: ")

print("\n")
print(madlib.format(name=name, adjective=adj, food=food, pronoun=pronoun, country=country))
print("\n")
