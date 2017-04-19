# deletes multiples in a list

list = [2,2,3,4,5,6,6,7,9,"a","b","a"]
mylist = []

for things in list:
    if things not in mylist:
            mylist.append(things)

print(mylist)
