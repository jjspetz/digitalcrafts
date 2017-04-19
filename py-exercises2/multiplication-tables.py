# prints multiplication tables from 1x1 to 10x10

for i in range(1, 11):
    for j in range(1, 11):
        print("{} x {} = {}".format(i, j, i*j))
