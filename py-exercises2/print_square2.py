# prints user inputed nxn square of *

n = int(input("Enter a small integer: "))

for i in range(n):
    for j in range(n):
        print("*",end="")
    print("")
