'''
Prints day of the week based on user inputed number.
Follows the pattern of Sunday = 0, Monday = 1, etc.
'''

day = int(input('Day (0-6)? '))

days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

print(days[day])
