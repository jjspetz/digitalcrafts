# prints an equilateral triangle of height 4

height = 4;
line = height;

for i in range(height):
    space = 3 - i
    for j in range(space):
        print(" ", end="")
    print("*" + "*" * 2 * i, end="")
    for j in range(space):
        print(" ", end="")

    print("")
