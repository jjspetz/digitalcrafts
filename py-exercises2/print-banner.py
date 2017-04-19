# prints a user inputed banner
# exp input: 'I like cake'
#
# outputs
#
# ***************
# * I like cake *
# ***************

string = input("Enter a string: ")
length = len(string) + 4

print("*" * length)
print("* {} *".format(string))
print("*" * length)
