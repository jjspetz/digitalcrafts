# prints a list of the first 100 'triangle numbers'
#  https://www.mathsisfun.com/algebra/triangular-numbers.html

mylist = []

for n in range(1,101):
    Tnum = int(n*(n+1)/2)
    mylist.append(Tnum)

print(mylist)
