'''
finds the smallest variable in the list
'''

# just an example list
list = [4, 5, 7, 9, 2, 0, 3, 22]

# initialize largest
smallest = list[0]

for i in list:
	if i < smallest:
		smallest = i

print(smallest)
