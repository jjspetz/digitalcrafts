# makes a box of user inputed hieght and width

# gets user input
height = int(input("Enter a height: "))
width = int(input("Enter a width: "))

# calculate helper variables
space = width - 2

for j in range(height):
    if j == 0 or j == height - 1:
        print("*" * width)
    else:
        print("*" + (" "*space) + "*")
