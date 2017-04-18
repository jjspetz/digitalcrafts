'''
prints a new list of the positive numbers in the original list
'''

multiple = input("Enter an integer to multiply by: ")
list = [1, "hamster", 3, 4, -7, 8, -12, 33, -12, 0 , 6]
mylist = []

for num in list:
	if type(num) == int:
		mylist.append(num*multiple)

print(mylist)
