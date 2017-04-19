# prints an equilateral triangle of user inputed height n

height = int(input("Enter a small integer: "));
line = height;

for i in range(height):
    space = (height - 1) - i
    for j in range(space):
        print(" ", end="")
    print("*" + "*" * 2 * i, end="")
    for j in range(space):
        print(" ", end="")

    print("")
